const API = (() => {
    
    const getAll = (artist) => {
        fetchJsonp(`https://itunes.apple.com/search?term=${artist}&media=music&entity=album&attribute=artistTerm&limit=500`)
        .then(res => res.json())
        .then(json => console.log(json.results));
    }



    return {
        getAll,
    }
})()

const View = (() => {
    const domElement = {
        album : '.album',
        searchInput: '.search-input',
        searchBtn: '.btn-search',
        form: '.search'
    }

    const render = (ele, htmlString) => {
        element.innerHTML = htmlString;
    }

    const createAlbum = arr => {
        const htmlString = ''
        arr.results.forEach(item => {
            htmlString += `
                <div class="album">
                    <img src=${item.artworkUrl100} alt="Album Picture">
                </div>
            `
        });
    }

    return {
        domElement,
        render,
        createAlbum,
    }
})()

const Model = ((api,view) => {
    class State {
        #album = [];
        
        get album() {
            return this.#album;
        }
        set album(newalbum) {
            this.#album = newalbum;

            const albumEle = document.querySelector(view.domElement.album);
            const htmlString = view.createAlbum(this.#album);
            view.render(albumEle, htmlString);
        }
    }

        const getAll = api.getAll

    return {
        State,
        getAll

    }
})(API,View)

const Controller = ((view,model) => {
    const state = new model.State()

    const searchAlbum = () => {
        const searchBtn = document.querySelector(view.domElement.searchBtn)
        searchBtn.addEventListener('click', e => {
            e.preventDefault();
            console.log('Form Submit')
        })
    }

    const searchResult = () => {
        const searchInput = document.querySelector(view.domString.searchInput);
        searchInput.addEventListener('keyup', event => {
            if (event.key === 'Enter') {
               
                model.getAll(event.target.value)
                .then(data => {
                    console.log(data);
                    state.album = [data, ...state.album];
                });
                event.target.value = '';
            }
        });
    }

    const init = () => {
        model.getAll()
        .then(data => {
            state.album = data
            createAlbum()
            searchAlbum()
        })
    }

    return {
        init
    }
})(View, Model)