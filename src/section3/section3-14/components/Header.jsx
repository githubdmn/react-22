
import propTypes from "prop-types";

function Header({text, bgColor, textColor}) {

	const headerStyle = {
		backgroundColor: bgColor,
		color: textColor
	}

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
  textColor: "#ff6a95",
};

Header.propTypes = {
  text: propTypes.string,
  backgroundColor: propTypes.string,
  color: propTypes.string
};

export default Header

