import FeedbackItem from "./FeedbackItem";

function FeedbackList({ data }) {
  if (!data || data.length < 1) return <p>Empty list</p>;
  return (
    <div className="feedback-list">
      <p>
        Warning: Each child in a list should have a unique "key" prop. `key` is
        not a prop. Trying to access it will result in `undefined` being
        returned. If you need to access the same value within the child
        component, you should pass it as a different prop.
      </p>
      {data.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default FeedbackList;
