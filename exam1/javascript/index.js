const albumAPI = (() => {


    const getCards = (name) => {
        const artistName =  name;
        const baseurl = 'https://itunes.apple.com/search?term=${'+ artistName +'}&media=music&entity=album&attribute=artistTerm&limit=500';


        return fetchJsonp(baseurl)
            .then((response) => response.json());
    }

    return {
        getCards,
    }
})();

const View = (() => {
    const domString = {
        cardList: 'album-card',
        nameSearch: 'name-search',
        searchResult: 'search-result',
        searchBtn: 'search-btn',
        searchForm: 'search-form'
    }
    const render = (element, htmlString) => {
        element.innerHTML = htmlString;
    }

    const createCard = (cardArray) => {
        let htmlString = '';
        cardArray.results.forEach(ele => {
            htmlString += `
            <div class="card">
                <div class="card-item">
                    <div class="card-img">
                        <img src="${ele.artworkUrl100}">
                    </div>
                <div class="card-title">
                    <h6>${ele.collectionName}</h6>
                </div>
                </div>
            </div>
            `;
        });
        return htmlString;
    }

    return {
        domString,
        render,
        createCard
    }
})();

const Model = ((api, view) => {
    class Card {
        constructor(title) {
            this.img = img;
            this.title = title;
        }
    }

    class State {
        #cardVal = [];
        #inputVal = '';


        get inputVal() {
            return this.#inputVal;
        }
        set inputVal(value) {
            this.#inputVal = value[0];
            const cardElement = document.querySelector('#' + view.domString.searchResult);
            const htmlString = value[1] + " results for: " + this.#inputVal
            // view.createCard(this.#cardVal);
            view.render(cardElement, htmlString);

        }
        
        get cardVal() {
            return this.cardVal;
        }
        set cardVal(newlist) {
            this.#cardVal = newlist;
            const cardElement = document.querySelector('#' + view.domString.cardList);
            const htmlString =  view.createCard(this.#cardVal);
            view.render(cardElement, htmlString);

            
        }
    }

    const getCards = api.getCards;

    return {
        Card,
        State,
        getCards,
    }
})(albumAPI, View);

const AppController = ((view, model) => {

    const state = new model.State();

    const search = () => {
        const searchBtn = document.querySelector('#' + view.domString.searchBtn);
        const nameSearch = document.querySelector('#' + view.domString.nameSearch);
        const searchForm = document.querySelector('#' + view.domString.searchForm);

        const click = () => {
            searchBtn.addEventListener('click', event => {
                // const nameSearch = document.querySelector('#' + view.domString.nameSearch);   
                model.getCards(nameSearch.value).then(data => {
                    state.inputVal = [nameSearch.value, data.results.length]
                    state.cardVal = data;
                    search();
                })
                
            });
        }
        click();

        nameSearch.addEventListener('keypress', event => {
            if (event.keyCode == 13) {
                event.preventDefault()
                model.getCards(nameSearch.value).then(data => {
                    state.inputVal = [nameSearch.value, data.results.length]
                    state.cardVal = data;
                    search();
                })
                
            }
            
        })
    }

    const init = () => {
        model.getCards().then(data => {
            // state.cardVal = data;
            search();
        })
        
    }
    
    return {
        init
    }
})(View, Model);

AppController.init();

