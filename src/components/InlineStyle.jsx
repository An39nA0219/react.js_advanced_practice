export const InlineStyle = () => {
  const containerSyle = {
    border: "solid 2px blue",
    borderRadius: "20px",
    padding: "8px",
    margin: "8px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  };
  const titleStyle = {
    margin: 0,
    color: "yellowgreen"
  };
  const buttonStyle = {
    backgroundColor: "lightpink",
    border: "none",
    padding: "8px",
    borderRadius: "8px"
  };
  return (
    <div style={containerSyle}>
      <p style={titleStyle}>- Inline Style -</p>
      <button style={buttonStyle}>FIGHT!</button>
    </div>
  );
};
