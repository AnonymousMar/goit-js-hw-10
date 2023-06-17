export function fetchBreeds() {
    const apiKey = 'live_8tpZg11OtSAVj1x4e7Xsgrtcx0d6GFYVaOUgrdFXq3fwB3BvcWUUBzK33KIQ8PCa'; 
    const url = 'https://api.thecatapi.com/v1/breeds';

    return fetch(url, {
        headers: {
            'x-api-key': apiKey
        }
    })
        .then(response => response.json())
        .then(data => data)
        .catch(error => {
            throw error;
        });
}

export function fetchCatByBreed(breedId) {
    const apiKey = 'live_8tpZg11OtSAVj1x4e7Xsgrtcx0d6GFYVaOUgrdFXq3fwB3BvcWUUBzK33KIQ8PCa'; 
    const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;

    return fetch(url, {
        headers: {
            'x-api-key': apiKey
        }
    })
        .then(response => response.json())
        .then(data => data[0])
        .catch(error => {
            throw error;
        });
}
