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
    let len = Math.min(data.results.length, 50);
    for (let i = 0; i < len; i++) {
        let content_array = document.getElementsByClassName("content_list");
        let content_box = document.createElement('div');
        content_box.className = "content_box";
        content_array[0].appendChild(content_box);

        let content_img = document.createElement('img');
        content_img.className = "content_img";
        content_img.src = data.results[i].artworkUrl100;
        content_box.appendChild(content_img);

        let content_info = document.createElement('p');
        content_info.className = "content";
        content_info.innerHTML = data.results[i].collectionName.substring(0, 25);
        content_box.appendChild(content_info);
        console.log(data.results[i], content_box);
    }
    let remaind = document.getElementsByClassName("remaind_words");
    remaind[0].innerHTML = data.results.length + " results for " + document.getElementsByClassName("header_input_box")[0].value;


}
