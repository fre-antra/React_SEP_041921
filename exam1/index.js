function getData(input) {
    const baseurl = `https://itunes.apple.com/search?term=${input}&media=music&entity=album&attribute=artistTerm&limit=50`;
    return fetchJsonp(baseurl).then((res) => res.json()).then(json => render(json));
}

function render(json) {
    let htmlString = '';
    const target = document.createElement("div");
    target.className = 'flexGrid';
    document.querySelector('.result').appendChild(target)

    json.results.forEach(e => {
        htmlString +=
            `<div class="card">
                <img class="card_img"
                    src="${e.artworkUrl100}">
                <div class="card_content">${e.collectionName}</div>
            </div>`;
    });
    target.innerHTML = htmlString;
    return json.resultCount
}

function search(event) {
    event.preventDefault();
    const flexGrid = document.querySelector('.flexGrid')
    if (flexGrid) {
        flexGrid.remove()
    }
    infoBar.innerHTML = `<div class="lds"><div></div><div></div><div></div></div>`
    const inputValue = document.querySelector('.search_input').value;
    getData(inputValue).then((count) => {
        infoBar.innerHTML = count + ` results for "${inputValue}"`
    })
}

const form = document.querySelector('.search');
const infoBar = document.getElementById('info');
form.addEventListener('submit', search)