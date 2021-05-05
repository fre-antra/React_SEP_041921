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
        countResult: 'count_header',
        collectionList: 'content',
        searchInput: 'header_search'
    }
    const render = (element, htmlString) => {
        element.innerHTML = htmlString;
    }

    const createCountResult = (artist, count) => {
        let htmlString = `<p>${count} results for "${artist}"</p>`;
        return htmlString
    }

    const createCollectionList = (collectionArray) => {
        let htmlString = '';
        collectionArray.forEach(ele => {
            htmlString += `
                <div class="card">
                    <div class="card_image">
                        <img src="${ele.artworkUrl100}"/>
                    </div>
                    <span class="card_title">${ele.collectionName}</span>
                </div>
            `;
        });
        return htmlString;
    }

    return {
        domString,
        render,
        createCountResult,
        createCollectionList
    }
})();

const Model = ((api, view) => {

    class State {
        #collectionList = [];
        #count = [];

        get count() {
            return this.#count;
        }
        set count(newCount) {
            const countElement = document.querySelector('.' + view.domString.countResult);
            const countHtmlString = view.createCountResult(...newCount);
            view.render(countElement, countHtmlString);
        }

        get collectionList() {
            return this.#collectionList;
        }
        set collectionList(newList) {
            this.#collectionList = newList;
            const collectionElement = document.querySelector('.' + view.domString.collectionList);
            const collectionHtmlString = view.createCollectionList(this.#collectionList);
            view.render(collectionElement, collectionHtmlString);
        }   
    }

    const searchArtist = api.searchArtist;

    return {
        State,
        searchArtist,
    }
})(searchAPI, View);

const AppController = ((view, model) => {
    const state = new model.State();
    
    const searchInput = () => {
        const searchEle = document.querySelector('.' + view.domString.searchInput)
        searchEle.addEventListener('keyup', event=>{
            if(event.key === 'Enter'){
                const artist = event.target.value;
                model.searchArtist(artist).then(data =>{
                    console.log(data)
                    state.count = [artist, data.resultCount];
                    state.collectionList = data.results;
                });

            }
        })
    }
    
    return {
        searchInput
    }
})(View, Model);

AppController.searchInput();
 

