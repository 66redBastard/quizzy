import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, forkJoin, Observable, Subject } from 'rxjs';
// import { Store } from '@ngrx/store';
// import { QuizState } from '@a-domains/store/quiz.state';
// import { getQuizzes } from '@a-domains/store/selectors/quiz.selector';
// import { loadQuizzes } from '@a-domains/store/actions/quiz.actions';

import { Question } from '@a-domains/models/questions.model';
import { QuizzesService } from '@a-domains/services/quizzes.service';
import { QuestionCategory } from '@a-domains/shared/types/question-category';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  quizzes: any[] = [];
  // subjectData = new Subject<any>();

  constructor(private serviceQuizzes: QuizzesService) {}

  ngOnInit(): void {
    forkJoin([
      this.serviceQuizzes
        .getQuizzes({
          category: new QuizCategory().category,
          amount: Math.floor(Math.random() * 30) + 1,
        })
        .subscribe((data: any) => {
          data.map((data: any) => {
            this.quizzes.push(new Quiz(data));
          });
          console.log(this.quizzes);
        }),
      this.serviceQuizzes.sendData(this.quizzes),
    ]);
  }

  // 1. store out
  // 2. on init call service method
  // 3. in content component OnInit make calls ended and return (store in arr) data to service
  // 4. show qiuzzes on page
}
class Quiz {
  id: string;
  title: string;
  description: string | undefined;
  questions: Question[];

  constructor(data: any) {
    this.id = uuid();
    this.title = this.getTitle(data);
    this.questions = this.getQuestions(data);
  }

  getTitle(data: any) {
    return data[0].category;
  }
  getQuestions(data: any) {
    const questions = [];
    for (let key in data) {
      questions.push(data[key].question);
    }

    return questions;
  }
}

class QuizCategory {
  category: number;

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

  constructor() {
    this.category = this.getCategory();
  }

  getCategory() {
    const titles: any = [];
    this.quizzesTitle.map((titleData) => {
      titles.push(titleData.type);
    });
    const randomElement = titles[Math.floor(Math.random() * titles.length)];
    return randomElement;
  }
}
