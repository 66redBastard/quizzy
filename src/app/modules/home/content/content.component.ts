import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Question } from '@a-domains/models/questions.model';
import { QuizzesService } from '@a-domains/services/quizzes.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  quizzes?: Observable<Question[]>;

  constructor(private quizzesService: QuizzesService) {}

  ngOnInit(): void {
    this.quizzes = this.quizzesService.loadQuizzes();
  }
}
