import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { QuizState } from '@a-domains/store/quiz.state';
import { getQuizzes } from '@a-domains/store/selectors/quiz.selector';
import { loadQuizzes } from '@a-domains/store/actions/quiz.actions';

import { Question } from '@a-domains/models/questions.model';
import { QuizzesService } from '@a-domains/services/quizzes.service';
import { QuestionCategory } from '@a-domains/shared/types/question-category';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  quizzes?: Observable<Question[]>;

  constructor(
    private store: Store<QuizState[]>,
    private serviceQuizzes: QuizzesService
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

  ngOnInit(): void {
    // this.quizzesTitle.map((quizTitleInfo) => {
    //   this.serviceQuizzes.getQuizzes({
    //     category: quizTitleInfo.type,
    //     amount: Math.floor(Math.random() * 30) + 1,
    //   }).subscribe(console.log)
    // }

    // 1. store out
    // 2. on init call service method
    // 3. in content component OnInit make calls ended and return (store in arr) data to service
    // 4. show qiuzzes on page

    this.store.select(getQuizzes).subscribe(console.log);
    this.store.dispatch(loadQuizzes());
  }
}
