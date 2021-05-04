
async function getArtists(){

    let ARTIST_NAME =   document.getElementById("mySearch").value;
    const response = await fetch(`https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=500`)
    const artist = await response.json()

    
    let titleFind = document.getElementById("find")
    titleFind.innerText = `We found ${artist.resultCount} results for ${ARTIST_NAME}`
    
    const cont = document.getElementById("container-card")  
    cont.innerHTML =  ""
    artist.results.forEach( card => renderCard(card) )

  
}



function renderCard(card) {

    const cont = document.getElementById("container-card")  
   
    let div = document.createElement('div')
    div.className = 'card'
    cont.appendChild(div)

    let img = document.createElement('img')
    img.classList += 'card-avatar'
    img.src = card.artworkUrl60
    div.appendChild(img)
  
    let h2 = document.createElement('h2')
    h2.textContent = card.artistName
    div.appendChild(h2)

  
    let p = document.createElement('p')
    p.textContent = card.collectionName
    div.appendChild(p)  
  
  }