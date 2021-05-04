const albumAPI = (() => {

    const artistName =  "swift"
    console.log(artistName)
    console.log(234)
    const baseurl = 'https://itunes.apple.com/search?term=${'+ artistName +'}&media=music&entity=album&attribute=artistTerm&limit=500';

    const getCards = () =>
        fetchJsonp(baseurl)
            .then((response) => response.json());

    return {
        getCards,
    }
})();

const View = (() => {
    const domString = {
        cardList: 'album-card',
        removeBtn: 'btn-remove',
        searchResult: 'search-result'
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
        #cardList = [];
        #inputVal = '';

        get inputVal() {
            return this.#inputVal;
        }
        set inputVal(value) {
            this.#inputVal = value;
        }
        
        get cardList() {
            return this.cardList;
        }
        set cardList(newlist) {
            this.#cardList = newlist;

            const cardElement = document.querySelector('#' + view.domString.cardList);
            console.log(this.#cardList)
            const htmlString = view.createCard(this.#cardList);
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

    const init = () => {
        model.getCards().then(data => {
            state.cardList = data;
            // removeTodoFromList();
            // addTodoToList();
        });
    }
    
    return {
        init
    }
})(View, Model);

AppController.init();

