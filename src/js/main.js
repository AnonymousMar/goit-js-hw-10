import './css/styles.css';
fetch('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_8tpZg11OtSAVj1x4e7Xsgrtcx0d6GFYVaOUgrdFXq3fwB3BvcWUUBzK33KIQ8PCa')
    .then(response => response.json())
    .then(json => console.log(json))