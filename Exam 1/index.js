const searchAPI = (() => {

    const searchArtist = (artist_name) => 
        fetch(`https://itunes.apple.com/search?term=${artist_name}&media=music&entity=album&attribute=artistTerm&limit=500`)
            .then((response) => response.json());    

    return {
        searchArtist,
    }
})();

const View = (() => {
    const domString = {
        count: 'content__header',
        collections: 'content__main',
        search: 'header__serach'
    }
    const render = (element, htmlString) => {
        element.innerHTML = htmlString;
    }

    // const createSearchResult = (artist_name, result) => {
    //     let htmlString = `<p class="search__result">${result} results for "${artist_name}"</p>`;
    //     return htmlString
    // }

    const createCollections = (collectionList) => {
        let htmlString = '';
        collectionList.forEach(ele => {
            htmlString += `
                <card class="card">
                    <img class="cardImage' src="${ele.collectionViewUrl}">
                    <span class="cardTitle>${ele.collectionName}</span>
                </card>
            `;
        });
        return htmlString;
    }

    return {
        domString,
        render,
        // createSearchResult,
        createCollections
    }
})();

const Model = ((api, view) => {
    class State {
        #search_result = {};
        #inputval = '';
        get inputval() {
            return this.#inputval;
        }
        set inputval(value) {
            this.#inputval = value;
        }

        get search_result() {
            return this.#search_result;
        }
        set search_result(result) {
            this.#search_result = result;
            // const countElement = document.querySelector('.' + view.domString.count);
            // const countHtmlString = view.createSearchResult(this.#inputval, this.#search_result.resultCount);
            const collectionElement = document.querySelector('.' + view.domString.collections);
            const collectionHtmlString = view.createCollections(this.#search_result.results);
            // view.render(countElement, countHtmlString);
            view.render(collectionElement, collectionHtmlString);
        }
        
    }

    const searchArtist = api.searchArtist;

    return {
        State,
        searchArtist,
    }
})(searchAPI, View);

const AppController = ((model) => {
    const state = new model.State();
    
    const searchInput = () => {
        let artist_name =  document.getElementById("header__search").value;

        model.searchArtist(artist_name).then(data => {
            console.log(data);
            state.search_result = data;
        });

    }

    const init = () => {
        searchInput();
    }
    
    return {
        init
    }
})(Model);

AppController.init();
 

