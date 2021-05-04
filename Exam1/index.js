function fetchData() {
    fetchJsonp("http://127.0.0.1:5500/")
        .then((res) => res.json())
        .then((json) => console.log(json));
}

function fetchData() {
    var name = document.getElementById("input-text").value;
    let output = "";
    var app = document.getElementById("app");

    const data = fetch(
        "https://itunes.apple.com/search?term=" +
            name +
            "&media=music&entity=album&attribute=artistTerm&limit=500"
    )
        .then((res) => res.json())
        .then((data) => {
            app.innerHTML = `<div style = "text-align: center;"> <p> Results found: ${data.resultCount} </p>
            </div>`;
            data.results.forEach((element) => {
                app.innerHTML += `<div class = "col" style =
                "color: red;
                float: left;
                width: 20%;
                margin-top: 50px;
                padding: 0 10px;">

                <div class = "card" style = 
                "box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                padding: 10px;
                height: 330px;
                text-align: center;
                background-color: #f1f1f1;">
                <img src = "${element.artworkUrl60}" style = "height: 230px"></src>
                <p> ${element.artistName} </p>

                </div>
                `;
            });

            console.log(data);
        })
        .catch((err) => console.log("Something went wrong: ", err));

    return output;
}

function insert() {
    output = `
    <div>
        hello
    </div>
    `;
    document.getElementById("app").innerHTML = "<ol><li>html data</li></ol>";

    // You can use native DOM methods to insert the fragment:
}

fetchData();
insert();
console.log("hello");
