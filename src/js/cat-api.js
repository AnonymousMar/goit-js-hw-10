   const API_KEY =
      'live_8tpZg11OtSAVj1x4e7Xsgrtcx0d6GFYVaOUgrdFXq3fwB3BvcWUUBzK33KIQ8PCa';

    export async function fetchBreeds() {
        try {
            const response = await fetch('https://api.thecatapi.com/v1/breeds', {
                headers: {
                    'x-api-key': API_KEY,
                },
            });
            if (!response.ok) {
                throw new Error('Failed to fetch breeds');
            }
            const data = await response.json();
            return data.map(breed => ({ id: breed.id, name: breed.name }));
        } catch (error) {
            console.error('Error fetching breeds:', error);
            throw error;
        }
    }

    export async function fetchCatByBreed(breedId) {
        try {
            const response = await fetch(
                `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`,
                {
                    headers: {
                        'x-api-key': API_KEY,
                    },
                }
            );
            if (!response.ok) {
                throw new Error('Failed to fetch cat information');
            }
            const data = await response.json();
            return data[0];
        } catch (error) {
            console.error('Error fetching cat information:', error);
            throw error;
        }
    }
