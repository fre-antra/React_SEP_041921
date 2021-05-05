import React from 'react';

export default function Title(props) {
  if (!props.albumCount) {
    return (
      <div className="row info">
        <p id="album-count">Search Albums by ArtistName:</p>
        <hr />
      </div>
    );
  }

  else return (
    <div className="row info">
      <p id="album-count">{props.albumCount} results for "{props.artistName}" </p>
      <hr />
    </div>
  );
}
