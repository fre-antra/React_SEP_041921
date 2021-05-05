
let ARTIST_NAME;
const album = document.querySelector('#album__wrapper');

(function getSearchInput() {
  
    let inputVal = "";
    const searchInputElem = document.querySelector('#searchbar__input');
    
    searchInputElem.addEventListener('keyup', event => {
        if (event.key === 'Enter') {
            inputVal = event.target.value;
            event.target.value = '';
            ARTIST_NAME = inputVal;

            const url = `https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=500`;

            if (album.innerHTML !== null ){
                album.innerHTML = "";
                fetchData(url);
            }
        }
    })
})();

const fetchData = (url) => {
    const resultCount = document.querySelector('.results__count');

    fetchJsonp(url)
    .then(res => res.json())
    .then(json => {

        let count = json.resultCount;
        resultCount.innerHTML = "";
        resultCount.innerHTML +=`${count} results for "${ARTIST_NAME}"`

        json.results.forEach(elem => {
            album.innerHTML +=
            `<li class="album__card">
                <img src="${elem.artworkUrl60}"></img>
                <p>${elem.collectionName}<p>
            </li>`

        })
    })
};



