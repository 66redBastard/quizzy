import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { EmptyError, Observable, of } from 'rxjs';
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

  // loadQuiz$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(loadQuizzes),
  //     mergeMap((Action) => {
  //       return this.quizzesTitle.map((quizTitleInfo) => {
  //         return this.quizzesService
  //           .getQuizzes({
  //             category: quizTitleInfo.type,
  //             amount: Math.floor(Math.random() * 30) + 1,
  //           })
  //           .pipe(
  //             map((quizzes) => {
  //               console.log('EFFECTS QUIZZES', quizzes);
  //               return loadQuizzesSuccess({ quizzes });
  //             })
  //           );
  //       });
  //     })
  //   );
  // });

  // loadQuiz$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(loadQuizzes),
  //     mergeMap((Actions) => {
  //       return this.quizzesService.getQuizzes().pipe(
  //         map((quizzes) => {
  //           console.log('EFFECTS QUIZZES', quizzes);
  //           return loadQuizzesSuccess({ quizzes });
  //         })
  //       );
  //     })
  //   );
  // });

  // loadQuiz$ = createEffect(
  //   (entity = QuestionCategory) => {
  //     return this.actions$.pipe(
  //       ofType(loadQuizzes),
  //       mergeMap(() => of(this.quizzesService.initQuizes()))
  //       // mergeMap((action) => {
  //       //   return this.quizzesService.initQuizes().pipe(
  //       //     map((quizzes) => {
  //       //       console.log(quizzes);
  //       //       return loadQuizzesSuccess({ action });
  //       //     })
  //       //   );
  //       // })
  //     );
  //   },
  //   { dispatch: false }
  // );
}
