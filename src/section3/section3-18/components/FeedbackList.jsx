import FeedbackItem from "./FeedbackItem";
import warning from "../../data/warning";
import propTypes from "prop-types";

function FeedbackList({ data, handleDelete }) {
  if (!data || data.length < 1) return <p>Empty list</p>;
  return (
    <div className="feedback-list">
      <p>{warning}</p>
      {data.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

FeedbackList.propType = {
  data: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      text: propTypes.string.isRequired,
      rating: propTypes.number.isRequired,
    })
  ),
};

export default FeedbackList;
