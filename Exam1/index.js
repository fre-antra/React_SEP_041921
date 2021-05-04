const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const artist = req.body.artist;
  const url = "https://itunes.apple.com/search?term=${artist}&media=music&entity=album&attribute=artistTerm&limit=500";
  
  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      const artistData = JSON.parse(data);
      const results = artistData.results;
      const count = artistData.resultCount;
      const name = artistData.results.artistName;
      res.write("<p>There are" + count + "albums by" + name + "</p>");
      results.forEach(element => {
        const album = element.collectionName;
        const imageURL = element.artworkUrl100;
        res.write(
            `<div class="card">
                <img class="album-image" src="${imageURL}">
                <div class="album-name">${album}</div>
            </div>`
          ); 
      });
      res.send();
    });
  });
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});