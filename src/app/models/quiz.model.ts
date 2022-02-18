export interface Question {
  category?: string;
  correctAnswer?: boolean;
  difficulty?: string;
  incorrectAnswers?: [];
  question?: string;
  type?: boolean;
}
export interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}
