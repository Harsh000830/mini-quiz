// src/components/QuestionList.jsx
import { useDispatch, useSelector } from "react-redux";
import { selectAnswer } from "../store/quizSlice";

export default function QuestionList() {
  const dispatch = useDispatch();
  const { questions, answers, status } = useSelector((state) => state.quiz);

  const handleChange = (questionId, optionIndex) => {
    dispatch(selectAnswer({ questionId, optionIndex }));
  };

  return (
    <div>
      {questions.map((q, idx) => (
        <div
          key={q.id}
          style={{
            marginBottom: "1.5rem",
            padding: "1rem",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          <h3>
            Q{idx + 1}. {q.question}
          </h3>
          {q.options.map((opt, i) => (
            <label key={i} style={{ display: "block", marginTop: "0.3rem" }}>
              <input
                type="radio"
                name={`question-${q.id}`}
                disabled={status !== "running"}
                checked={answers[q.id] === i}
                onChange={() => handleChange(q.id, i)}
              />
              {"  "}
              {opt}
            </label>
          ))}
        </div>
      ))}
    </div>
  );
}
