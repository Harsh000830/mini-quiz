# 📚 Mini Quiz System — React + Redux + Timer

A simple and clean **Multiple-Choice Quiz Web App** built using **React (Vite)** and **Redux Toolkit**.  
The quiz loads static questions, runs a countdown timer, auto-submits when time ends, and shows the final score.

---

##  Features

-  **5–10 MCQ Questions** (loaded from a static JS file)
-  **Redux Toolkit State Management**
  - Stores questions  
  - Tracks selected answers  
  - Calculates score  
  - Maintains quiz states: `not_started`, `running`, `finished`
- ⏱ **2‑Minute Countdown Timer**
  - Starts when quiz begins  
  - Updates every second  
  - Auto-submits quiz when time ends
- ✔️ **Manual Submit Button**
-  **Final Score Display**
-  **Retry Quiz Option**
-  Built using **Vite + React**

---

##  Project Structure

```
src/
│
├── App.jsx
├── main.jsx
├── index.css
│
├── data/
│   └── questions.js
│
├── store/
│   ├── store.js
│   └── quizSlice.js
│
└── components/
    ├── Timer.jsx
    ├── QuestionList.jsx
    └── Result.jsx
```

---

## 🛠 Setup Instructions

### 1. Install dependencies
```bash
npm install
```

### 2. Run the project
```bash
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

---

##  Demo (For Assignment)

Record a short video showing:

1. Opening the app  
2. Starting the quiz  
3. Selecting answers  
4. Timer running  
5. Auto-submit or manual submit  
6. Score display  

---

##  Future Improvements

- Show correct/wrong answers after submitting  
- Add per-question navigation  
- Add UI animations  
- Store progress in localStorage  

---

###  Project Completed for Assignment  
**Mini Quiz System – React + Redux + Timer**
