import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Quiz } from '@a-domains/models/quiz.model';

@Injectable({
  providedIn: 'root',
})
export class QuizzesService {
  private url: string = `${environment.triviaApi}`;
  constructor(private http: HttpClient) {}

  getQuizzes(): Observable<Quiz[]> {
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
