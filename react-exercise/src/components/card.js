const Card = ({ title, paragraph, btnColor, setHeaderColor }) => {
  let styling = {
    backgroundColor: btnColor,
  };
  let wrapperStyle = {
    width: "400px",
    fontSize: "1rem",
    border: "1px solid white",
  };

  const handleHeaderColor = e => {
    setHeaderColor(e.target.style.backgroundColor);
  };

  return (
    <div style={wrapperStyle}>
      <h1>{title}</h1>
      <p>{paragraph}</p>
      <button style={styling} onClick={handleHeaderColor}>
        See more
      </button>
    </div>
  );
};

export default Card;
