//import './css/styles.css';
const refs = {
    searchForm: document.querySelector('.breed-select'),
    articlesContainer: document.querySelector('.cat-info'),
};
refs.searchForm.addEventListener('click', onSearch);
function onSearch(e) {
    e.preventDefault();

    const form = e.currentTarget.elements.query.value;

    const options = {
        headers: {
            Autorization: 'live_8tpZg11OtSAVj1x4e7Xsgrtcx0d6GFYVaOUgrdFXq3fwB3BvcWUUBzK33KIQ8PCa'
        }
    };
    const url = 'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng'
    fetch(url, options)
        .then(response => response.json())
        .then(console.log)
}
