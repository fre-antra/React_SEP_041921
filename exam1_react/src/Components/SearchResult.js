import React, { Component } from 'react';
import Title from "./Title";

export default function SearchResult(props) {
  let resultCards = props.albumList.map(album => {
    return (
      <div key={album.collectionId} className="card">
        <img className="card__img" src={album.artworkUrl100} />
        <div className="card__albumtitle">
          {album.collectionName}
        </div>
      </div>
    );
  });
  return (
    <main className="container">
      <Title {...props} />

      <div id="searchResult" className="row">
        {resultCards}
      </div>
    </main>
  );
}
