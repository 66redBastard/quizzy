import { Action, createReducer, on } from '@ngrx/store';
import { initialState, QuizState } from '../quiz.state';
import { loadQuizzesSuccess } from '../actions/quiz.actions';

const _quizzesReducer = createReducer(
  initialState,
  on(loadQuizzesSuccess, (state, action) => {
    return {
      ...state,
      quizzes: action.quizzes,
    };
  })
);

export function quizzesReducer(state: QuizState | undefined, action: Action) {
  return _quizzesReducer(state, action);
}
