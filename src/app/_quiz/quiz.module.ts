import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizRoutingModule } from './quiz-routing.module';
import { QuizQuestionsComponent } from './components/quiz-questions/quiz-questions.component';
import { QuizService } from './services/quiz.service';
import { QuizResultsComponent } from './components/quiz-results/quiz-results.component';


@NgModule({
  declarations: [QuizQuestionsComponent, QuizResultsComponent],
  imports: [
    CommonModule,
    QuizRoutingModule
  ],
  providers:
    [
      QuizService
    ]
})
export class QuizModule { }
