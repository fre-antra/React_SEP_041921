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

const addAlbum = (arr) => {    
    arr.forEach (item => {
        htmlString += `
        <div class="album">
            <img src=${item.artworkUrl100} alt="Album Picture">
        </div>
    `
    })
}

const render = (ele, htmlString) => {
    element.innerHTML = htmlString;
}

const domEle = {
    form: '.search-form',
    searchInput: '.search-input'
}

const searchAlbum = () => {
    const searchEle = document.querySelector(domEle.form)
    const searchInput = document.querySelector(domEle.searchInput)
    let newSearch = ''
    let albums = []

    searchInput.addEventListener('change', e => {
        newSearch = e.target.value
    })

    searchEle.addEventListener('submit', e => {
        e.preventDefault()
        API.getAll(newSearch)
        .then(data => albums = addAlbum(data.results))
        .then(console.log(albums))
        // .then(render(domEle.albums))
    })
}


searchAlbum()