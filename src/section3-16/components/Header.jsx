import propTypes from "prop-types";

function Header({ text, txColor, bgColor }) {
  const headerStyle = {
    backgroundColor: bgColor,
    color: txColor,
  };

  return (
    <header style={headerStyle}>
      <div className="container">
        <h1>{text}</h1>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0, 0, 0, 0.4)",
  txColor: "#ff6a95",
};

Header.propTypes = {
  text: propTypes.string,
  color: propTypes.string,
  backgroundColor: propTypes.string,
};

export default Header;
