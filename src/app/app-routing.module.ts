import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopMenuLayoutComponent } from './layout/app-layout/top-menu-layout/top-menu-layout.component';

const routes: Routes = [
  {
    path: '',
    component: TopMenuLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'quiz',
        pathMatch: 'full'
      },
      {
        path: 'quiz',
        loadChildren: () => import('./_quiz/quiz.module').then(m => m.QuizModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
