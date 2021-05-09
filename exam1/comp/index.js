const AppApi = (() => {
    const urlpart1 = 'https://itunes.apple.com/search?term=${';
    const urlpart2 = '}&media=music&entity=album&attribute=artistTerm&limit=500';

    const getAllAlbums = (albumName) =>
        fetchJsonp([urlpart1, albumName, urlpart2].join(''))
            .then(response => response.json());

    return {
        getAllAlbums
    }
})();
const View = (() => {
    const domString = {
        searchBar: 'search-bar',
        searchMessage: 'search-message',
        cardsContainer: 'cards-container',
    }
    const render = (element, htmlTemplate) => {
        element.innerHTML = htmlTemplate;
    }
    const createCardTmp = (arr) => {
        let tmp = '';
        arr.forEach(data => {
            tmp += `
                <div class="card">
                    <img src="${data.artworkUrl100}" alt="">
                    <div class="card_title">${data.collectionName}</div>
                </div>
            `;
        });
        return tmp;
    }
    return {
        domString,
        render,
        createCardTmp
    };
})();
const Module = ((api, view) => {
    const getAllAlbums = api.getAllAlbums;

    class State {
        #collectionList = [];
        #numOfCollection = 0;

        get numOfCollection() {
            return this.#numOfCollection;
        }
        set numOfCollection(num) {
            this.#numOfCollection = num;
        }
        get collections() {
            return this.#collectionList;
        }
        set collections(newCollections) {
            this.#collectionList = newCollections;

            const cardsContainer = document.querySelector('#' + view.domString.cardsContainer);
            const tmp = view.createCardTmp(this.#collectionList);
            view.render(cardsContainer, tmp);
        }
    }
    return {
        getAllAlbums,
        State
    };
})(AppApi, View);
const AppController = ((view, module) => {
    const state = new module.State();
    const searchBar = document.querySelector('#' + view.domString.searchBar);
    const searchMessage = document.querySelector('#' + view.domString.searchMessage);

    const addLisenerInput = () => {
        searchBar.addEventListener('keyup', (event) => {
            if (event.key === 'Enter' && event.target.value) {
                module.getAllAlbums(event.target.value).then(data => {
                    state.numOfCollection = +data.resultCount;
                    state.collections = data.results;

                    const message = `${state.numOfCollection} results for "${event.target.value}"`;
                    view.render(searchMessage, message);
                });
            } else if (event.key === 'Enter' && !event.target.value) {
                const noMessage = 'Search Albums by ArtistName:';
                view.render(searchMessage, noMessage);
                state.collections = [];
            }
        });
    }
    const init = () => {
        addLisenerInput();
    };
    return {
        init
    };
})(View, Module);
AppController.init();