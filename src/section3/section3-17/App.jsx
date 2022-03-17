import { useState } from "react";
import "./index.css";
import { Header, FeedbackList } from "./components";
import FeedbackData from "../data/feedback";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure?"))
      setFeedback(feedback.filter((item) => item.id !== id));
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList data={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
