function init() {
  let albumCount = 0;
  //api search
  function searchArtist(artistName) {
    fetch(`https://itunes.apple.com/search?term=${artistName}&media=music&entity=album&attribute=artistTerm&limit=500`)
      .then((response) => response.json())
      .then((albumList) => {
        albumCount = albumList.resultCount;
        displayAlbums(albumList.results);
      })
      .catch(error => console.log(error));
  }

  //control the search bar
  let searchValue = "";
  let searchBar = document.getElementById("searchBar");
  searchBar.value = "";
  let searchButton = document.getElementById("magnifying_class_btn");
  searchBar.addEventListener('keyup', (event) => {
    searchValue = event.target.value;
    if (event.key === 'Enter') {
      //call the API search
      searchArtist(event.target.value);
    }
  });
  searchButton.addEventListener('click', (event) => {
    //call the API search
    if (searchValue != "") searchArtist(searchValue);

  });

  //populate search result
  function displayAlbums(albumList) {
    let htmlString = "";
    //show album count
    let albumCountElem = document.getElementById("album-count");
    albumCountElem.innerHTML = `${albumCount} results for "${searchValue}"`;

    //display results as cards
    albumList.forEach(album => {
      htmlString += `
        <div class="card">
          <img class="card__img" src="${album.artworkUrl100}" />
          <div class="card__albumtitle">
            ${album.collectionName}
          </div>
        </div>
      `;
    });

    //render
    const searchResultElement = document.getElementById("searchResult");
    searchResultElement.innerHTML = htmlString;
  }

}

init();