const musicAPI = (() => {
  const getResultsFromArtistName = (artistName, limit = 500) =>
    fetchJsonp(
      `https://itunes.apple.com/search?term=$%7b${artistName}%7d&media=music&entity=album&attribute=artistTerm&limit=${limit}`
    ).then((res) => res.json());

  return {
    getResultsFromArtistName,
  };
})();
musicAPI.getResultsFromArtistName("swift");

const View = (() => {
  const domString = {
    cardsList: "cardsList",
    searchInput: "searchInput",
    report: "report",
  };

  const render = (element, value) => {
    element.innerHTML = value;
  };

  const showLists = (arrOfItems) => {
    let htmlString = "";
    arrOfItems.forEach((item) => {
      htmlString += `
            <div class="card">
            <div class="card__thumbnail">
                <img class="card__image" src="${item.artworkUrl100}" alt="" srcset="">
            </div>
            <div class="card__caption">
                <p class="card__text">${item.collectionCensoredName}</p>
            </div>
        </div>
            `;
    });
    return htmlString;
  };

  const showReport = (artistName, numberOfResults) => {
    return `${numberOfResults} result(s) for ${artistName}`;
  };

  return { domString, render, showLists, showReport };
})();

const Model = ((api, view) => {
  const getResultsFromArtistName = api.getResultsFromArtistName;

  class State {
    #resultsList = [];
    #inputValue = "";
    #artistName = "";
    #numberOfResults = 0;
    rerender = () => {
      console.log("in changing state");
      const list = document.querySelector("#" + view.domString.cardsList);
      let htmlString = view.showLists(this.#resultsList);
      view.render(list, htmlString);
      const report = document.querySelector("#" + view.domString.report);

      let htmlStringReport = view.showReport(
        this.#artistName,
        this.#numberOfResults
      );

      view.render(report, htmlStringReport);
    };

    get resultsList() {
      return this.#resultsList;
    }

    set resultsList(newList) {
      this.#resultsList = newList;

      this.rerender();
    }

    get inputValue() {
      return this.#inputValue;
    }

    set inputValue(newValue) {
      this.#inputValue = newValue;

      console.log("chnage report 2", newValue);
      const report = document.querySelector("#" + view.domString.report);

      let htmlStringReport = view.showReport(
        this.#artistName,
        this.#numberOfResults
      );

      view.render(report, htmlStringReport);
    }

    get artistName() {
      return this.#artistName;
    }

    set artistName(newName) {
      this.#artistName = newName;
    }

    get numberOfResults() {
      return this.#numberOfResults;
    }

    set numberOfResults(number) {
      this.#numberOfResults = number;
    }
  }

  return {
    getResultsFromArtistName,
    State,
  };
})(musicAPI, View);

const AppController = ((view, model) => {
  let state = new Model.State();

  const addsearchForArtistFunctionToInput = () => {
    const inputElement = document.querySelector(
      "#" + view.domString.searchInput
    );
    console.log(inputElement);
    inputElement.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        state.inputValue = event.target.value;
        model.getResultsFromArtistName(state.inputValue).then((data) => {
          if (data.resultCount === 0) {
            console.log("in controller", data);
          } else {
            // rerender after new state
            state.resultsList = data.results;
            console.log(state.numberOfResults, state.artistName);
            state.numberOfResults = data.resultCount;
            state.artistName = data.results[0].artistName;
          }
        });
      }
    });
  };

  addsearchForArtistFunctionToInput();

  const init = () => {
    //model.getResultsFromArtistName("swift").then((data) => {
    //  console.log("in init", data.results);
    //  state.resultsList = data.results;
    //});
  };

  return { init };
})(View, Model);

AppController.init();
