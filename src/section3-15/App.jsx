import { useState } from "react";

import "./index.css";
import { Header, FeedbackList } from "./components";
import feedbackData from "../data/feedback.js";

function App() {
  const [feedback, setFeedback] = useState(feedbackData);
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList data={feedback} />
      </div>
    </>
  );
}

export default App;
