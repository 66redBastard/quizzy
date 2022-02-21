import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { forkJoin, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Question } from '@a-domains/models/questions.model';
import { Store } from '@ngrx/store';
import { QuizState } from '@a-domains/store/quiz.state';
import { loadQuizzes } from '@a-domains/store/actions/quiz.actions';
import { getQuizzes } from '@a-domains/store/selectors/quiz.selector';
import { QuestionCategory } from '@a-domains/shared/types/question-category';

@Injectable({
  providedIn: 'root',
})
export class QuizzesService {
  private url: string = `${environment.triviaApi}amount=${query.amount}&category=${query.category}1&difficulty=easy&type=boolean`;
  private quizzesTitle = [
    { type: QuestionCategory.Art, title: 'Art' },
    { type: QuestionCategory.Comics, title: 'Comics' },
    { type: QuestionCategory.Films, title: 'Films' },
    { type: QuestionCategory.Geography, title: 'Geography' },
    { type: QuestionCategory.History, title: 'History' },
    { type: QuestionCategory.Music, title: 'Music' },
    { type: QuestionCategory.ScienceComputers, title: 'Science Computers' },
    { type: QuestionCategory.Sports, title: 'Sports' },
    { type: QuestionCategory.Vehicles, title: 'Vehicles' },
    { type: QuestionCategory.VideoGames, title: 'VideoGames' },
  ];

  constructor(private http: HttpClient, private store: Store<QuizState[]>) {
    this.initQuizes();
  }

  initQuizes() {
    forkJoin([
      this.quizzesTitle.map((quizTitleData) => {
        return this.getQuizzes({
          category: quizTitleData.type,
          amount: 10,
        }).pipe(
          map((questions: any) => {
            return {
              title: quizTitleData,
              questions: questions.results,
            };
          })
        );
      }),
    ]);
  }

  loadQuizzes() {
    const quizzes = this.store.select(getQuizzes);
    console.log('SERVICE === ', quizzes);
    this.store.dispatch(loadQuizzes());
    return quizzes;
  }

  getQuizzes(query: { category: number; amount: number }) {
    return this.http.get(this.url).pipe(
      map((data: any) => {
        const quizzes = [];
        console.log('SERVICE === ', data);
        for (let key in data) {
          quizzes.push({ ...data[key] });
        }
        return quizzes;
      }),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
}
