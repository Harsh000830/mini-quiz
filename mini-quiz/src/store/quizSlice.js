// src/store/quizSlice.js
import { createSlice } from "@reduxjs/toolkit";
import questions from "../data/questions";

const TOTAL_TIME = 2 * 60; 

const initialState = {
  questions,
  answers: {},
  timeLeft: TOTAL_TIME,
  status: "not_started",
  score: 0,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    startQuiz(state) {
      state.status = "running";
      state.timeLeft = TOTAL_TIME;
      state.answers = {};
      state.score = 0;
    },
    selectAnswer(state, action) {
      const { questionId, optionIndex } = action.payload;
      if (state.status !== "running") return;
      state.answers[questionId] = optionIndex;
    },
    tick(state) {
      if (state.status !== "running") return;
      if (state.timeLeft > 0) {
        state.timeLeft -= 1;
      } else {
        state.status = "finished";
      }
    },
    submitQuiz(state) {
      if (state.status === "finished") return;
      let score = 0;
      state.questions.forEach((q) => {
        const selected = state.answers[q.id];
        if (selected === q.correctIndex) score += 1;
      });
      state.score = score;
      state.status = "finished";
    },
    resetQuiz() {
      return initialState;
    },
  },
});

export const { startQuiz, selectAnswer, tick, submitQuiz, resetQuiz } =
  quizSlice.actions;

export default quizSlice.reducer;
