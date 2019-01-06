import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizzComponent } from './quizz/quizz.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path : 'quizz', component: QuizzComponent},
  {path : 'quizz/:id', component: QuizzComponent},
  {path: '', component: LoginComponent},
  {
    path: 'register', component: RegisterComponent
  },{
    path:'profile', component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
