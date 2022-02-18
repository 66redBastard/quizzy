import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Quiz } from '@a-domains/models/quiz.model';
import { QuizState } from '@a-domains/store/quiz.state';
import { loadQuizzes } from '@a-domains/store/actions/quiz.actions';
import { getQuizzes } from '@a-domains/store/selectors/quiz.selector';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  quizzes?: Observable<Quiz[]>;

  constructor(private store: Store<QuizState>) {}

  ngOnInit(): void {
    this.quizzes = this.store.select(getQuizzes);
    console.log(this.quizzes);
    this.store.dispatch(loadQuizzes());
  }
}
