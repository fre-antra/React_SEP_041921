const form = document.querySelector('#search_form')
const input= document.querySelector('#search_input')
const notification= document.querySelector('.notification')
const landingPage = document.querySelector('.landingPage')
const resultDiv= document.querySelector('.results')

const createURl= artist=>`https://itunes.apple.com/search?term=${artist}&media=music&entity=album&attribute=artistTerm&limit=500`

const seachAlbumAPI={
    getAlbums(artist){
        if (artist !== ''){
            landingPage.innerHTML=''
            const url= createURl(artist);
            fetch(url).then(res => res.json())
            .then(json=>{
                let {results}= json
                notification.innerHTML=`${results.length} result(s) for "${artist}"`
                displayResults(results)
            })
        }
        else {
            landingPage.innerHTML='Search Albums by Artist Name'
            notification.innerHTML=''
            resultDiv.innerHTML=''
        }
        
    }
};

function displayResults(results){
    let html= results.map(obj=>`
    <div class='card'>
        <img src=${obj.artworkUrl100}/>
        <div class='card_content'>${obj.collectionName}</div>
    </div>`).join('')
    resultDiv.innerHTML= html
}

const handleChange=()=>{
    input.addEventListener('keyup',function(event){
        seachAlbumAPI.getAlbums(input.value)
    })
};
const handleSubmit=()=>{
    form.addEventListener('submit',event=>{
        event.preventDefault()
        seachAlbumAPI.getAlbums(input.value)
    })
}

const runApp = (()=>{
    handleSubmit();
    handleChange();
})();

/*-------MODEL-VIEW-CONTROLLER--------*/

// const View = (() => {
//     const domString = {
//         albumlist: 'searchAlbum__results',
//         searchInput: 'searchAlbum__input'
//     }
//     const render = (element, htmlString) => {
//         element.innerHTML = htmlString;
//     }

//     const createAlbumTmp = (array) => {
//         return array.map(obj=>`
//             <div class='card'>
//                 <img src=${obj.artworkUrl100}/>
//                 <h2>${obj.collectionName}</h2>
//             </div>`).join('')
//     }

//     return {
//         domString,
//         render,
//         createAlbumTmp
//     }
// })();

// const Model = ((api, view) => {
//     class Album {
//         constructor() {
//
//         }
//     }

//     class State {
//         #albumlist = [];
//         #searchinput = '';

//         get searchinput() {
//             return this.#searchinput;
//         }
//         set searchinput(value) {
//             this.#searchinput = value;
//         }
//         get albumlist() {
//             return this.#albumlist;
//         }
//         set albumlist(newlist) {
//             this.#albumlist = newlist;
//             const listElement = document.querySelector('#' + view.domString.albumlist);
//             const htmlString = view.createTodoTmp(this.#albumlist);
//             view.render(listElement, htmlString);
//         }
//     }

//     const getAlbums= api.getAlbums;

//     return {
//         Album,
//         State,
//         getAlbums
//     }
// })(seachAlbumAPI, View);

// const AppController=(()=> {

//     const handleChange=()=>{
//         input.addEventListener('keyup',function(event){
//             seachAlbumAPI.getAlbums(input.value)
//         })
//     }
//     const handleSubmit=()=>{
//         form.addEventListener('submit',event=>{
//             event.preventDefault()
//             seachAlbumAPI.getAlbums(input.value)
//         })
//     }

//     const init= ()=>{
//         handleSubmit();
//         handleChange();
//     }

//     return {init}
// })();

// AppController.init();

