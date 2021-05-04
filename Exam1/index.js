// Prevent refresh on enter
document.getElementById('searchbar').addEventListener('submit', function(e) {
    e.preventDefault();
}, false);

// Add listener for keydown
document.getElementById('search').addEventListener('keydown', event => {
  if(event.keyCode === 13){
      searchAlbums();
  }
});

function searchAlbums(){
    let input = document.getElementById("search").value;
    input = input.toLowerCase();
    getAlbums(input);
}

function getAlbums(name){
    fetchAlbum(`${name}`).then(data => {
        fillCard(data);
        changeSearchResultHeader(name, data.length);
    });
}

async function fetchAlbum(artistName){
    let albumCollection;

    albumCollection = await fetchJsonp(`https://itunes.apple.com/search?term=${artistName}&media=music&entity=album&attribute=artistTerm&limit=500`)
        .then(response => response.json())
        .then(data => albumCollection = data)
        .then(() => albumCollection);

    return albumCollection.results;
}

function changeSearchResultHeader(name, numberOfResults){
    const result = document.getElementById('search-header');
    result.innerHTML = `${numberOfResults} results found for name "${name}"`;
}

function fillCard(albumCollection){
    const grid = document.getElementById('search-result-grid');
    console.log(albumCollection);
    grid.innerHTML = '';
    for(let i = 0; i < albumCollection.length; i++){
        let card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
                        <div class="card__image">
                            <img
                                    src="${albumCollection[i].artworkUrl60}" alt="Album Image">
                        </div>
                        <div class="card-text">
                            ${albumCollection[i].collectionCensoredName}
                        </div>
`
        albumCollection[i].collectionCensoredName;
        grid.appendChild(card);
    }
}

function generateFakeCards(number){


}