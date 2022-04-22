import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
// import { EffectsModule } from '@ngrx/effects';
// import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { environment } from '../environments/environment';
import { QuizzesService } from './services/quizzes.service';
// import { QuizEffects } from './store/effects/quiz.effects';
// import { quizzesReducer } from './store/reducers/quiz.reducer';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    // StoreModule.forRoot(quizzesReducer),
    // EffectsModule.forRoot([QuizEffects]),
  ],
  providers: [QuizzesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
