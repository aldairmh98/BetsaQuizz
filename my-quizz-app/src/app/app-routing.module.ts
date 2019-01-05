import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizzComponent } from './quizz/quizz.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {path : 'quizz', component: QuizzComponent},
  {path : 'quizz/:id', component: QuizzComponent},
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
