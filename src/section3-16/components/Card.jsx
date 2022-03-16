import PropTypes from "prop-types";

function Card({ children, reverse }) {
  let classname = reverse ? "card" : "card reverse";
  return <div className={`${classname}`}>{children}</div>;
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

Card.defaultProps = {
  reverse: false,
};

export default Card;
