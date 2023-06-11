import SlimSelect from 'slim-select';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const url = `https://api.thecatapi.com/v1/breeds`;
const api_key = "live_8tpZg11OtSAVj1x4e7Xsgrtcx0d6GFYVaOUgrdFXq3fwB3BvcWUUBzK33KIQ8PCa"
let storedBreeds = []

fetch(url, {
    headers: {
        'x-api-key': api_key
    }
})
    .then((response) => {
        return response.json();
    })
    .then((data) => {

        data = data.filter(img => img.image?.url != null)

        storedBreeds = data;

        for (let i = 0; i < storedBreeds.length; i++) {
            const breed = storedBreeds[i];
            let option = document.createElement('option');

            if (!breed.image) continue

            option.value = i;
            option.innerHTML = `${breed.name}`;
            document.getElementById('breed_selector').appendChild(option);

        }
        showBreedImage(0)
    })
    .catch(function (error) {
        console.log(Notify.error);
    });
function showBreedImage(index) {
    document.getElementById("breed_image").src = storedBreeds[index].image.url;

    document.getElementById("breed_json").textContent = storedBreeds[index].temperament

    document.getElementById("wiki_link").hrf = storedBreeds[index].wikipedia_url
    document.getElementById("wiki_link").innerHTML = storedBreeds[index].wikipedia_url
}
new SlimSelect({
    select: '#selectElement'
})