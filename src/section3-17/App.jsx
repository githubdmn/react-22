import { useState } from "react";
import "./index.css";
import { Header, FeedbackList } from "./components";
import FeedbackData from "../data/feedback";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  
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
