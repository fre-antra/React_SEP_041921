const API = (() => {
    
    const getAll = (artist) => 
        fetchJsonp(`https://itunes.apple.com/search?term=${artist}&media=music&entity=album&attribute=artistTerm&limit=500`)
        .then(res => res.json())
    

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
        ele.innerHTML = htmlString;
    }

    const createAlbum = arr => {
        let htmlString = ''
        arr.forEach(item => {
            htmlString += `
                <div class="album">
                    <img src=${item.artworkUrl100} alt="Album Picture">
                </div>
            `
        });
        return htmlString
    }

    return {
        domElement,
        render,
        createAlbum,
    }
})()

const Model = ((api,view) => {
    class State {
        #album = []
        #val = ''
        
        get album() {
            return this.#album;
        }
        set album(newalbum) {
            this.#album = newalbum;
            
            const albumEle = document.querySelector(view.domElement.album);
            const htmlString = view.createAlbum(this.#album);
            view.render(albumEle, htmlString);
        }
        get val() {
            return this.#val;
        }
        set val(value) {
            this.#val = value;        
         
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
    const albumContent = document.querySelector(view.domElement.album)
    const searchAlbum = () => {
        let artistName = ''
        searchInput = document.querySelector(view.domElement.searchInput)
        searchInput.addEventListener('change', e => {
            artistName = e.target.value
            console.log(artistName)
        })

        searchForm = document.querySelector(view.domElement.form)
        searchBtn = document.querySelector(view.domElement.searchBtn)
        searchForm.addEventListener('submit', e => {
            e.preventDefault()
            console.log("Form submit!")
            model.getAll(artistName).then(data => {
                console.log(data.results)                
                const htmlString = view.createAlbum(data.results)
                view.render(albumContent,htmlString)
            })
        })

    }

    return {
        searchAlbum
    }
})(View,Model)

Controller.searchAlbum()
// Model.getAll('swift')