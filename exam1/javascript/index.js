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
        searchBtn: 'search-btn'
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
            this.#inputVal = value;
            const cardElement = document.querySelector('#' + view.domString.searchResult);
            const htmlString = "songs by: " + this.#inputVal
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

        nameSearch.addEventListener('keyup', event => {
            if (event.key === 'Enter') {
                event.preventDefault()
                state.inputval = nameSearch.value
            }
        })
        console.log(45654654)
        searchBtn.addEventListener('click', event => {
            const cardElement = document.querySelector('#' + view.domString.searchResult);
            const nameSearch = document.querySelector('#' + view.domString.nameSearch);
            console.log(nameSearch.value)
            state.inputVal = nameSearch.value
            model.getCards(nameSearch.value).then(data => {
                console.log(56)
                state.cardVal = data;
                search();
            })
            if (event.key === 'Enter') {
                state.inputval = nameSearch.value
                event.preventDefault()
            }
            
        });
    }

    const init = () => {
        model.getCards().then(data => {
            console.log(56)
            state.cardVal = data;
            search();
        })
        
    }
    
    return {
        init
    }
})(View, Model);

AppController.init();

