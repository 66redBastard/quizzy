import { createAction, props } from '@ngrx/store';
import { Question } from '@a-domains/models/questions.model';

export const LOAD_QUIZZES = '[home page] load quizzes';
export const LOAD_QUIZZES_SUCCESS = '[home page] load quizzes success';

export const SET_QUIZZES = '[home page] set quizzes';
export const SET_QUIZZES_SUCCESS = '[home page] set quizzes success';
export const GET_QUIZZES = '[home page] get quizzes';
export const GET_QUIZZES_SUCCESS = '[home page] get quizzes success';

export const loadQuizzes = createAction(LOAD_QUIZZES);
export const loadQuizzesSuccess = createAction(
  LOAD_QUIZZES_SUCCESS,
  props<{ quizzes: Question[] }>()
);
