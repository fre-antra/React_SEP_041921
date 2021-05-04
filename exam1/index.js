
var form = document.getElementById('formid')

form.addEventListener('submit', function(event){
    event.preventDefault();

    var artistName = document.getElementById('artist').value
    fetchJsonp(`https://itunes.apple.com/search?term=${artistName}&media=music&entity=album&attribute=artistTerm&limit=500`)
    .then(function (response){
        return response.json();
    }).then(function (data){
        console.log(data);
        console.log(data.results.length);
        let topString = `<h2>${data.results.length} results for "${artistName}"</h2> <hr>`;
        document.getElementById('topResult').innerHTML = topString;
        let htmlString=`<div class="results-container">
        `;
        //console.log(data.results[0].artistName);
        data.results.forEach(element => {
            htmlString += `
                <div class="card-album">
                    <img src="${element.artworkUrl100}">
                    <div>${element.collectionName}</div>
                </div>  
            `
        });

        htmlString += `</div>`
        document.getElementById('divroot').innerHTML = htmlString;
    })
})
    
    // var artistName = document.getElementById('artist').nodeValue;
    // console.log(artistName);
    // fetchJsonp(`https://itunes.apple.com/search?term=${artistName}&media=music&entity=album&attribute=artistTerm&limit=500`)
    // .then(function (response){
    //     return response.json();
    // }).then(function (data){
    //     console.log(data);
    //     console.log(data.results.length);
    //     let htmlString=`<div class="results-container">
    //     `;
    //     //console.log(data.results[0].artistName);
    //     data.results.forEach(element => {
    //         htmlString += `
    //             <div class="card-album">
    //                 <img src="${element.artworkUrl100}">
    //                 <div>${element.collectionName}</div>
    //             </div>  
    //         `
    //     });

    //     htmlString += `</div>`
    //     document.getElementById('divroot').innerHTML = htmlString;
    // })


// fetchJsonp(`https://itunes.apple.com/search?term=${artistName}&media=music&entity=album&attribute=artistTerm&limit=500`)
// .then(function (response){
//     return response.json();
// }).then(function (data){
//     console.log(data);
//     console.log(data.results.length);
//     let htmlString=`<div class="results-container">
//     `;
//     //console.log(data.results[0].artistName);
//     data.results.forEach(element => {
//         htmlString += `
//             <div class="card-album">
//                 <img src="${element.artworkUrl100}">
//                 <div>${element.collectionName}</div>
//             </div>  
//         `
//     });

//     htmlString += `</div>`
//     document.getElementById('divroot').innerHTML = htmlString;
// })

// document.getElementById('h1root').innerHTML = '<h3>hello</h3>';

