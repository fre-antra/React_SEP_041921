
const baseurl = (init) =>{
    const artistName = `https://itunes.apple.com/search?term=${init}&media=music&entity=album&attribute=artistTerm&limit=500`;
    return artistName;
}


const searchAct = () =>{
    let n = document.querySelector('.search');
    n.addEventListener('keyup',function(event){
        searchResult.getAll(n.value);
    })

    document.querySelector('.bar').addEventListener('submit',event =>{
        event.preventDefault();
        searchResult.getAll(n.value);
    })
}


const searchResult = {
    getAll(artistName){
        const linkInfo= baseurl(artistName);
        fetch(linkInfo)
        .then(res => res.json())
        .then(json =>{
            let {results} = json;
            document.querySelector('.default').innerHTML =`${results.length} Result for "${artistName}"`;

            let info= results.map(content =>
            `
            
            <div class='album'>
                <img class = "albumImg" src=${content.artworkUrl100} alt>
                <div class='albumInfo'>${content.collectionName}</div>
            </div>`).join('');

            document.querySelector('.searchResult').innerHTML= info;
            })
        }
};



searchAct();
