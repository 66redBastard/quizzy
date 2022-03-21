import { QuizState } from '../quiz.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const QUIZ_STATE_NAME = 'quizzes';

const getQuizState = createFeatureSelector<QuizState>(QUIZ_STATE_NAME);

// export const setQuizzes = createSelector(setQuizState, (state) => {
//   return state.quizzes;
// });

export const getQuizzes = createSelector(getQuizState, (state) => {
  return state.quizzes;
});
