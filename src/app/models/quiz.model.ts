import { Question } from './questions.model';

export interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}
