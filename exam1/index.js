const searchAPI = (()=>{
    const getAlbums = (ARTIST_NAME) =>
        fetchJsonp(`https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=500`)
            .then(res => res.json())

    return {
        getAlbums
    }
})();


const View = (()=>{
    const domString = {
        albumList:'content',
        searchInput: 'search-bar',
        countResult:'info'
    }

    const render = (element, htmlString)=>{
        element.innerHTML = htmlString;
    }

    const createAlbumTmp = (albumArray) => {
        let htmlString = '';
        albumArray.forEach(album =>{
            htmlString += `
              <div class="card">
                <div class="card-image">
                     <img src="${album.artworkUrl100}"/>
                </div>
                <div class="card-title">
                     <p>${album.collectionCensoredName}</p>
                 </div>
        </div>
            `
        })
        return htmlString
    }

    const createCountTmp = (count) =>{
        let htmlString = `
        <p> There are ${count} results </p>
        `;
        return htmlString;
    }

    return {
        render,
        createAlbumTmp,
        createCountTmp,
        domString
    }
})();

const Model = ((api,view)=>{

    class State {
        #albumList = [];
        #count = '';

        get count() {
            return this.#count;
        }

        set count(newCount){
            const htmlString = view.createCountTmp(newCount);
            const countEle = document.querySelector('.' + view.domString.countResult);
            view.render(countEle,htmlString)
        }

        get albumList() {
            return this.#albumList;
        }
        set albumList(newlist) {
            this.#albumList = newlist;
            const htmlString = view.createAlbumTmp(this.#albumList);
            const listEle = document.querySelector('.'+view.domString.albumList);
            view.render(listEle, htmlString);
        }
    }

    const getAlbums = api.getAlbums;

    return {
        State,
        getAlbums
    }
})(searchAPI, View);

const AppController = ((view, model)=>{
    const state = new model.State();

    const init = ()=>{
        const searchEle = document.querySelector('.' + view.domString.searchInput)
        searchEle.addEventListener('keyup', event=>{
            if(event.key === 'Enter'){
                const artist = event.target.value;
                model.getAlbums(artist).then(data =>{
                    state.count = data.resultCount;
                    console.log(data)
                    state.albumList = data.results;
                });

            }
        })
    }
    return {
        init
    }
})(View, Model);

AppController.init();

