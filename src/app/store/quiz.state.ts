import { Question } from '@a-domains/models/questions.model';

export interface QuizState {
  quizzes: Question[];
}

export const initialState: QuizState = {
  quizzes: [],
};
