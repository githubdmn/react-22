import propTypes from "prop-types";

function FeedbackStats({ feedback }) {
  const average =
    feedback.reduce((sum, current) => {
      return sum + current.rating;
    }, 0) / feedback.length;
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>
        Average rating:{" "}
        {isNaN(average) ? 0 : average.toFixed(1).replace(/[.,]0$/, "")}
      </h4>
    </div>
  );
}

FeedbackStats.propTypes = {
  feedback: propTypes.array.isRequired,
};

export default FeedbackStats;
