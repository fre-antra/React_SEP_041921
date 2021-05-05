const itunesAPI = (ARTIST_NAME) => {
  const baseUrl = `https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=500`;

  const getdata = fetchJsonp(baseUrl).then((res) => res.json());

  return getdata;
};

const addList = (data, query) => {
  const grid = document.querySelector(".grid");
  const info = document.querySelector(".content-info");

  let listArr = data.map((data) => {
    return `
           <div class="card">
             <img class="card-image" src="${data.artworkUrl100}">
             <div class="card-name">${data.collectionCensoredName}</div>
           </div>
         `;
  });

  info.innerHTML = `${data.length} results for "${query}"`;
  grid.innerHTML = listArr.join("");
};

const searchEventListeners = (() => {
  const searchbar = document.querySelector(".searchbar");
  const container = document.querySelector(".search-container");

  let state = {
    text: "",
  };

  searchbar.addEventListener("keyup", (event) => {
    state.text = event.target.value;
  });

  container.addEventListener("submit", (event) => {
    event.preventDefault();

    itunesAPI(state.text).then((data) => {
      addList(data.results, state.text);
    });
  });
})();

