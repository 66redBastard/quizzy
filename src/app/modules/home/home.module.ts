import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { QUIZ_STATE_NAME } from '@a-domains/store/selectors/quiz.selector';
import { EffectsModule } from '@ngrx/effects';
import { QuizEffects } from '@a-domains/store/effects/quiz.effects';

import { HomeRoutingModule } from './home-routing.module';
import { ContentComponent } from './content/content.component';
import { quizzesReducer } from '@a-domains/store/reducers/quiz.reducer';

@NgModule({
  declarations: [ContentComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    StoreModule.forFeature(QUIZ_STATE_NAME, quizzesReducer),
    EffectsModule.forFeature([QuizEffects]),
  ],
})
export class HomeModule {}
