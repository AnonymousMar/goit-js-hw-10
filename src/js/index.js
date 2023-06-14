async function fetchBreeds() {
    const response = await fetch(" https://api.thecatapi.com/v1/breeds?api_key=live_8tpZg11OtSAVj1x4e7Xsgrtcx0d6GFYVaOUgrdFXq3fwB3BvcWUUBzK33KIQ8PCa")
    const data = await response.json()
    createBreedList(data.message)
}

fetchBreeds()

function createBreedList(breedList) {
    document.getElementById("breed").innerHTML = `
  <select onchange="fetchCatByBreed(this.value) class="breed-select"">
        ${Object.keys(breedList).map(function (breed) {
            return `<option> ${breed} </option>`
    }).join('')}
      </select>
  `
}

 async function loadByBreed(breed) {
     if (breed != "Abysasiny") {
         const response = await fetch(`https://api.thecatapi.com/v1/images/${breed}`)
         const data = await response.json()
         fetchCatByBreed(data.message)
    }
}

function fetchCatByBreed(breedId) {
    document.querySelector(".cat-info").innerHTML = `<div class="cat-info" style="background-image: url('${images[0]}')"></div>`
}