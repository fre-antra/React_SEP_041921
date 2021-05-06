import React, { useState } from 'react';


export default function Counter(props){
    const {count, artist} = props;
    return(
        
            <div id="text-count">
                <p>{(count) ? `${count} results for ${artist}` : 'Search Albums by ArtistName:'}</p>
            </div>
        
    )
}