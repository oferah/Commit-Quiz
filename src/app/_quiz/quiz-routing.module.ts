import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizQuestionsComponent } from './components/quiz-questions/quiz-questions.component';
import { QuizResultsComponent } from './components/quiz-results/quiz-results.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'quiz-questions',
  },
  {
    path: 'quiz-questions',
    component: QuizQuestionsComponent
  },
  {
    path: 'quiz-results/:grade',
    component: QuizResultsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
