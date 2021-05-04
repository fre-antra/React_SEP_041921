const searchAPI = (() => {
  const baseUrl = "https://itunes.apple.com/search";
  // 'https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=500'
  const getSearchResult = (artist) => {
    const url =
      baseUrl +
      `?term=${artist}&media=music&entity=album&attribute=artistTerm&limit=500`;
    const option = {
      method: "GET",
    };
    return fetch(url, option).then((res) => res.json());
  };
  return {
    getSearchResult,
  };
})();

const View = (() => {
  const domString = {
    searchInput: "searchInput",
    searchRes: "searchRes",
    searchBtn: "searchBtn",
  };
  const render = (element, htmlString) => {
    element.innerHTML = htmlString;
  };
  const creatResCard = (result, searchInput) => {
    let htmlString = "";
    htmlString += ` <div class="count">
    <h2>${result.resultCount} results for '${searchInput}'</h2>
</div>`;
    const count = result.resultCount;
    result.results.forEach((ele) => {
      htmlString += `
      <div class="resCard">
          <img
            src="${ele.artworkUrl100}"
            class="cardImg"
          />
          <h4>${ele.collectionName}</h4>
        </div>`;
    });
    return htmlString;
  };
  return {
    domString,
    render,
    creatResCard,
  };
})();

const Model = ((api, view) => {
  class ResCard {
    constructor(artist, imgUrl) {
      this.artist = artist;
      this.imgUrl = imgUrl;
    }
  }
  class State {
    #searchRes = [];
    #searchInput = "";

    get searchInput() {
      return this.#searchInput;
    }
    set searchInput(value) {
      this.#searchInput = value;
    }

    get searchRes() {
      return this.#searchRes;
    }
    set searchRes(newlist) {
      this.#searchRes = newlist;
      const searchelement = document.querySelector(
        "#" + view.domString.searchRes,
      );

      const htmlString = view.creatResCard(this.#searchRes, this.#searchInput);

      view.render(searchelement, htmlString);
    }
  }
  const getSearchResult = api.getSearchResult;
  return {
    ResCard,
    State,
    getSearchResult,
  };
})(searchAPI, View);

const AppController = ((view, model) => {
  const state = new model.State();

  const searchArtist = () => {
    const inputValueEle = document.querySelector(
      "." + view.domString.searchInput,
    );
    const searchBtnEle = document.querySelector("." + view.domString.searchBtn);

    inputValueEle.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        state.searchInput = event.target.value;
        model.getSearchResult(state.searchInput).then((data) => {
          console.log(data);
          state.searchRes = data;
        });
        event.target.value = '';
      }
    });
    // searchBtnEle.addEventListener("click", (event) => {
    //   state.searchInput = event.target.value;
    //   model.getSearchResult(state.searchInput).then((data) => {
    //     console.log(data);
    //     state.searchRes = data;
    //   });
    // });
  };
  const init = () => {
    model.getSearchResult("kk").then((data) => {
      //   state.searchRes = data;
      //   console.log(data);
      searchArtist();
    });
  };
  return {
    init,
  };
})(View, Model);
AppController.init();
