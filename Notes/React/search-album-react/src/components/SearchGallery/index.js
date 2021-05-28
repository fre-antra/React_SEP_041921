import { useState, useContext, useEffect } from "react";
import { MyContext } from "../../App";
import "./index.css";

const SearchGallery = () => {
  const { searchInput } = useContext(MyContext);
  const [fetchedData, setFetchedData] = useState(null);
  const [count, setCount] = useState(0);
  const url = `https://itunes.apple.com/search?term=${searchInput}&media=music&entity=album&attribute=artistTerm&limit=500`;

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setFetchedData(data.results);
        setCount(data.resultCount);
      })
      .catch(err => console.log(err));
  }, [url]);

  return (
    <>
      <div className="results__count">
        {count
          ? `${count} results for "${searchInput}"`
          : "Search Album by Artist's Name"}
      </div>
      <div className="separator"></div>
      <section id="album__layout">
        <ul id="album__wrapper">
          {fetchedData &&
            fetchedData.map(elem => (
              <li key={elem.collectionId} className="album__card">
                <img src={elem.artworkUrl60}></img>
                <div>{elem.collectionName}</div>
                {/* <div></div> */}
              </li>
            ))}
        </ul>
      </section>
    </>
  );
};

export default SearchGallery;
