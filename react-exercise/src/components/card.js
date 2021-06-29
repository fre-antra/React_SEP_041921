const Card = ({ title, paragraph, btnColor, handleClick }) => {
  let styling = {
    backgroundColor: btnColor,
    color: "white",
  };

  let cardWrapper = {
    width: "400px",
    fontSize: "1rem",
    border: "1px solid white",
  };

  return (
    <div style={cardWrapper}>
      <h1>{title}</h1>
      <p>{paragraph}</p>
      <button style={styling} onClick={handleClick}>
        See more
      </button>
    </div>
  );
};

export default Card;
