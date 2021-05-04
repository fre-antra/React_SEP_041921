const API = (() => {
    
    const getAll = (artist) => {
        fetchJsonp(`https://itunes.apple.com/search?term=${artist}&media=music&entity=album&attribute=artistTerm&limit=500`)
        .then(res => res.json())
    }



    return {
        getAll,
    }
})()

const View = (() => {
    const domElement = {
        album : '.album-cover',
        searchInput: '.search-input',
        searchBtn: '.btn-search',
        form: '.search-form'
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
        const searchEle = document.querySelector(view.domElement.form)
        const searchInput = document.querySelector(view.domElement.searchInput)
        const newAlbum = document.querySelector(view.domElement.album)
        let newSearch = ''
        let albums = []
    
        searchInput.addEventListener('change', e => {
            newSearch = e.target.value
            console.log(newSearch)
        })
    
        searchEle.addEventListener('submit', e => {
            e.preventDefault()
            model.getAll(newSearch)
            .then(res => console.log(res))
            .then(res => state.album = res.results)            

        })
    }
    const init = () => {
        searchAlbum()
        view.render(newAlbum,state.album)
    }

    return {
        init
    }
})(View, Model)

Controller.init()