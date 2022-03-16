import propTypes from "prop-types";

function Header({ text, bgColor, txColor }) {
  const headerStyle = {
    color: txColor,
    backgrounColor: bgColor,
  };

  return (
    <header style={headerStyle}>
      <div className="container">
        <h1>{text}</h1>
      </div>
    </header>
  );
}

Header.propTypes = {
  text: propTypes.string,
  color: propTypes.string,
  backgrounColor: propTypes.string,
};

Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0, 0, 0, 0.4)",
  txColor: "#ff6a95",
};

export default Header;
