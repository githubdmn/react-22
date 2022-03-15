import { useState } from "react";

// function FeedbackItem() {
//   return(
//     <div className="card">
//       <div className="num-display">10</div>
//       <div className="text-display">Display example text</div>
//     </div>
//   );
// }

// function FeedbackItem() {
//   // destructuring useState array
//   const [rating, setRating] = useState(7);
//   const [text, setText] = useState("Display example state text");

//   return (
//     <div className="card">
//       <div className="num-display">{rating}</div>
//       <div className="text-display">{text}</div>
//     </div>
//   );
// }

function FeedbackItem() {
  // destructuring useState array
  const [rating, setRating] = useState(7);
  const [text, setText] = useState("Display example state text");

  const handleClick = () => {
    setRating(10);
    // setRating(() => 10);
  }

  const handleIncrease = () => {
    setRating((previousValue) => previousValue + 1);
  };

  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
      <button onClick={handleClick}>Set value to 10</button>
      <button onClick={handleIncrease}>Increase by 1</button>
    </div>
  );
}

export default FeedbackItem;
