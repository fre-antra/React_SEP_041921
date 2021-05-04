function Search() {

    let check = document.getElementsByClassName("header_input_box")[0].value;
    console.log(check);
    if (check == null)
        return;
    var xhttp = new XMLHttpRequest();              //need run on browser
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(xhttp.responseText);         // json light weight  parse json -> string   stringfie do other way
            console.log(data);
            fill_in_data(data);
        }
    };
    xhttp.open("GET", "https://itunes.apple.com/search?term=${" + check + "}&media=music&entity=album&attribute=artistTerm&limit=500", true);
    xhttp.send();
}

// function fill_img(url, img) {
//     var xhttp = new XMLHttpRequest();              //need run on browser
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             data = JSON.parse(xhttp.responseText);         // json light weight  parse json -> string   stringfie do other way
//             img.src = data;
//         }
//     };
//     xhttp.open("GET", url, true);
//     xhttp.send();
// }

function fill_in_data(data) {
    let img_array = document.getElementsByClassName("content_img");
    let content_array = document.getElementsByClassName("content");
    let box_array = document.getElementsByClassName("content_box");
    for (let i = 0; i < img_array.length; i++) {
        //fill_img(data.results[i].artistViewUrl, img_array[i])
        img_array[i].src = data.results[i].artworkUrl100;
        content_array[i].innerHTML = data.results[i].collectionName;
        box_array[i].style.display = 'block';
    }
}
//