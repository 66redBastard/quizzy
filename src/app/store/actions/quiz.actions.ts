import { createAction, props } from '@ngrx/store';
import { Quiz } from '@a-domains/models/quiz.model';

export const LOAD_QUIZZES = '[home page] load quizzes';
export const LOAD_QUIZZES_SUCCESS = '[home page] load quizzes success';

export const loadQuizzes = createAction(LOAD_QUIZZES);
export const loadQuizzesSuccess = createAction(
  LOAD_QUIZZES_SUCCESS,
  props<{ quizzes: Quiz[] }>()
);
