let button = document.querySelector('#submit');
let input = document.querySelector('#search');
let output = document.querySelector('#output');
let result = document.querySelector('#result')

button.addEventListener('click', (e)=> {
    getData()
})

function getData() {
    let url = "https://itunes.apple.com/search?term=$" + input.value + "&media=music&entity=album&attribute=artistTerm&limit=500";

    fetch(url)
    .then(res => res.json())
    .then(json => {console.log(json)
        let totalResults = '';
        let html = '';
        let count = 0;
        json.results.forEach( song => {
            count++;  
        });
        totalResults = `There are ${count} results by '${input.value}'`;
        json.results.forEach( song => {
            html += 
            `
            <div class = "container">
                <div class="card">
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src="${song.artworkUrl100}">
                    </div>
                    <div class="card-content">
                        <span class="card-title">${song.collectionCensoredName}<i class="material-icons right">more_vert</i></span>
                        <p>${song.artistName}</p>
                    </div>
                </div>
            </div>
            `
        })
        result.innerHTML = totalResults;
        output.innerHTML = html;
    });
}