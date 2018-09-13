document.addEventListener('DOMContentLoaded', function() {

const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`
const mainContainer = document.getElementById('main')



  function fetchData() {
    fetch(TRAINERS_URL).then((res) => res.json()).then(data => { data.forEach(trainerHTML)
    })
  }




function trainerHTML(data){
let dataHTML =
 `<div class="card" data-id="${data.id}"><p>${data.name}</p>
  <button data-trainer-id="${data.id}">Add Pokemon</button>
  <ul>`
data.pokemons.forEach(function(element){
  let pokes = `<li>${element.nickname} (${element.species}) <button class="release" data-pokemon-id="${element.id}">Release</button></li>`
  dataHTML += pokes
})

mainContainer.append(dataHTML)

}
function startapp(){
  fetchData()
  trainerHTML()
}

})
