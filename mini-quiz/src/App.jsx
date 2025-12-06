// src/App.jsx
import { useDispatch, useSelector } from "react-redux";
import { startQuiz, submitQuiz } from "./store/quizSlice";
import Timer from "./components/Timer";
import QuestionList from "./components/QuestionList";
import Result from "./components/Result";

function App() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.quiz.status);

  const handleStart = () => {
    dispatch(startQuiz());
  };

  const handleSubmit = () => {
    dispatch(submitQuiz());
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "1.5rem" }}>
      <h1>Mini Quiz System</h1>

      {status === "not_started" && (
        <button onClick={handleStart}>Start Quiz</button>
      )}

      {status === "running" && (
        <>
          <Timer />
          <QuestionList />
          <button onClick={handleSubmit}>Submit Quiz</button>
        </>
      )}

      {status === "finished" && <Result />}
    </div>
  );
}

export default App;
