
export default function Counter({count,artist}){
    return(
        
            <div id="text-count">
                <p>{(count) ? `${count} results for ${artist}` : 'Search Albums by ArtistName:'}</p>
            </div>
        
    )
}