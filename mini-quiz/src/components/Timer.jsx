// src/components/Timer.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tick, submitQuiz } from "../store/quizSlice";

export default function Timer() {
  const dispatch = useDispatch();
  const timeLeft = useSelector((state) => state.quiz.timeLeft);
  const status = useSelector((state) => state.quiz.status);

  useEffect(() => {
    if (status !== "running") return;

    const id = setInterval(() => {
      dispatch(tick());
    }, 1000);

    return () => clearInterval(id);
  }, [status, dispatch]);

  useEffect(() => {
    if (timeLeft === 0 && status === "running") {
      dispatch(submitQuiz());
    }
  }, [timeLeft, status, dispatch]);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <div style={{ fontWeight: "bold", fontSize: "1.2rem", margin: "1rem 0" }}>
      Time Left: {minutes}:{seconds}
    </div>
  );
}
