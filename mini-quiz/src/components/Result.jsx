// src/components/Result.jsx
import { useSelector, useDispatch } from "react-redux";
import { resetQuiz, startQuiz } from "../store/quizSlice";

export default function Result() {
  const dispatch = useDispatch();
  const { score, questions } = useSelector((state) => state.quiz);

  const handleRetry = () => {
    dispatch(resetQuiz());
    dispatch(startQuiz());
  };

  return (
    <div style={{ marginTop: "1.5rem" }}>
      <h2>Quiz Finished!</h2>
      <p>
        Your score: {score} / {questions.length}
      </p>
      <button onClick={handleRetry}>Retry Quiz</button>
    </div>
  );
}
