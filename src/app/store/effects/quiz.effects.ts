import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { EmptyError, of } from 'rxjs';
import {
  catchError,
  concatMap,
  exhaustMap,
  map,
  mergeMap,
  switchMap,
  tap,
} from 'rxjs/operators';
import { QuizzesService } from '@a-domains/services/quizzes.service';
import { loadQuizzes, loadQuizzesSuccess } from '../actions/quiz.actions';
import { QuestionCategory } from '@a-domains/shared/types/question-category';

@Injectable()
export class QuizEffects {
  constructor(
    private actions$: Actions,
    private quizzesService: QuizzesService
  ) {}

  loadQuiz$ = createEffect(
    (entity = QuestionCategory) => {
      return this.actions$.pipe(
        ofType(loadQuizzes),
        mergeMap(() => of(this.quizzesService.initQuizes()))
        // mergeMap((action) => {
        //   return this.quizzesService.initQuizes().pipe(
        //     map((quizzes) => {
        //       console.log(quizzes);
        //       return loadQuizzesSuccess({ action });
        //     })
        //   );
        // })
      );
    },
    { dispatch: false }
  );
}
