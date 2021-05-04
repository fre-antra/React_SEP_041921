
let ARTIST_NAME;

const domString = {
    searchInput: "searchbar__input"
}
const album = document.querySelector('#album__wrapper');
const resultCount = document.querySelector('.results__count');




function getSearchInput() {
  
    let inputVal = "";
    const searchInputElem = document.querySelector('#' + domString.searchInput);
    searchInputElem.addEventListener('keyup', event => {

        if (event.key === 'Enter') {
            inputVal = event.target.value;
            event.target.value = '';
            ARTIST_NAME = inputVal;
            console.log(ARTIST_NAME);
            if (album.innerHTML !== null ){
                album.innerHTML = "";
                fetchData();
            }
        }
    })
 
};
ARTIST_NAME = getSearchInput();

const fetchData = () => {
    const url = `https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=500`;
    fetchJsonp(url)
    .then(res => res.json())
    .then(json => {
        console.log(json);
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

        return json.resultCount;
    })

};



