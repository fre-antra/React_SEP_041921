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
            data.results.forEach((element) => {
                app.innerHTML += `<div class = "col" style =
                "color: red;
                float: left;
                width: 25%;
                margi
                margin-bottom: 10px;
                padding: 0 10px;">

                <div class = "card" style = 
                "box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                padding: 16px;
                height: 330px;
                margin-bottom; 20px;
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
