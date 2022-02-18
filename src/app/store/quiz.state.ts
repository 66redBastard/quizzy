import { Quiz } from '@a-domains/models/quiz.model';

export interface QuizState {
  quizzes: Quiz[];
}

export const initialState: QuizState = {
  quizzes: [],
};
