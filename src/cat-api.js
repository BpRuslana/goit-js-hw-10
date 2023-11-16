const BASE_URL = 'https://api.thecatapi.com/v1';
const options = {
    method: 'GET',
    headers: {
        'x-api-key': 'live_NhoSqA8TDboRIXwLNDBAWJ3cs1jF7VInf77rVBARiaYC3PKFVbob1UraRj3AB661',
    },
};

function fetchBreeds(){
    return fetch(`${BASE_URL}/breeds`, options)
    .then((res) => {
        if(!res.ok){
            throw new Error (res.status);
        }
        return res.json();
    });
};

function fetchCatByBreed(breedId){
    return fetch(`${BASE_URL}/images/search?breed_ids=${breedId}`,options).then(
        (res) => {
            if(!res.ok){
                throw new Error(res.status);
            }
            return res.json();
        }
    )
}

export {fetchBreeds, fetchCatByBreed};