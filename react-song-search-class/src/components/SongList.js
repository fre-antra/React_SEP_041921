import React from "react";
import SongCard from "./SongCard";
import styled from "styled-components";

const MainContainer = styled.main`
  position: relative;
  flex: 1 1 auto;
  overflow-y: auto;
  width: 100%;
`;

const SongResults = styled.section`
  width: 80%;
  margin: auto;
  padding: 1rem;
`;

const Info = styled.div`
  width: 90%;
  padding: 1rem;
  color: #333;
  font-size: 2rem;
  text-align: center;
  border-bottom: 1px solid var(--primary-color);
  margin: auto auto 1rem;
`;

const SongResultsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

class SongList extends React.Component {
  render() {
    return (
      <MainContainer>
        <SongResults>
          <Info>
            {(this.props.list.length) ? `${this.props.list.length} results for "${this.props.text}"` : 'Search Albums by ArtistName:'}
          </Info>
          <SongResultsList>
            {this.props.list.map((song) => (
              <SongCard key={song.collectionId} data={song} />
            ))}
          </SongResultsList>
        </SongResults>
      </MainContainer>
    )
  }
}
export default SongList;
