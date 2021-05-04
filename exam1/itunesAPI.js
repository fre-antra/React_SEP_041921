
const baseurl = (artiestName) =>{
    `https://itunes.apple.com/search?term=${artiestName}&media=music&entity=album&attribute=artistTerm&limit=500`
}

const searchAct = () => {
    let n = document.querySelector('.search');
    n.addEventListener('keyup',function(evt){
        searchResult.getAll(n.value);
    })

    form.addEventListener('submit',evt=>{
        evt.preventDefault()
        searchResult.getAll(n.value);
    })
}


const searchResult = () => {
    getAll = (artiestName) => {
        const linkInfo= baseurl(artiestName);
        fetch(linkInfo).then(res => res.json()).then(json=>{
                let {results} = json;
                document.querySelector('.default').innerHTML = `${results.length} Results for "${artiestName}"`;
                
        let cnt= results.map(content=>
            `
            <div class='album'>
                <img class = "albumImg" src=${content.artworkUrl100} alt>
                <div class='albumInfo'>${content.collectionName}</div>
            </div>`).join('')
            ;
        document.querySelector('.searchResult').innerHTML= cnt;
        }
    }
}
