import { createSlice } from "@reduxjs/toolkit";

const initialState = { questions: {}, score: 0 };

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    resetScore: (state) => {
      state.score = 0;
    },
    incrementScore: (state) => {
        state.score += 10;
    },
    decrementScore: (state) => {
        state.score -= 5;
    },
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
  },
});

export const { resetScore, setQuestions, decrementScore, incrementScore } =
  categorySlice.actions;

export default categorySlice.reducer;
