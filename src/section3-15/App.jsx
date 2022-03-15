import "./index.css"
import { Header, FeedbackItem } from "./components";

function App() {
  return (
    <>
      <Header />
      <div className="content">
        <FeedbackItem />
      </div>
    </>
  );
}

export default App;
