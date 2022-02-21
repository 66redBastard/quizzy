import { createAction, props } from '@ngrx/store';
import { Question } from '@a-domains/models/questions.model';

export const LOAD_QUIZZES = '[home page] load quizzes';
export const LOAD_QUIZZES_SUCCESS = '[home page] load quizzes success';

export const loadQuizzes = createAction(LOAD_QUIZZES);
export const loadQuizzesSuccess = createAction(
  LOAD_QUIZZES_SUCCESS,
  props<{ quizzes: Question[] }>()
);
