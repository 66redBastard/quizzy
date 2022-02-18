import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { EmptyError } from 'rxjs';
import {
  catchError,
  concatMap,
  exhaustMap,
  map,
  mergeMap,
  tap,
} from 'rxjs/operators';
import { QuizzesService } from '@a-domains/services/quizzes.service';
import { loadQuizzes, loadQuizzesSuccess } from '../actions/quiz.actions';
import { Quiz } from '@a-domains/models/quiz.model';

@Injectable()
export class QuizEffects {
  constructor(
    private actions$: Actions,
    private quizzesService: QuizzesService
  ) {}

  loadQuiz$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loadQuizzes),
        mergeMap((action) => {
          return this.quizzesService.getQuizzes().pipe(
            map((quizzes) => {
              console.log(quizzes);
              return loadQuizzesSuccess({ quizzes });
            })
          );
        })
      );
    },
    { dispatch: false }
  );
}
