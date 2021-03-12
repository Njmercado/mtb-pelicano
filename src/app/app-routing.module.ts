import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginViewComponent } from './login-view/login-view.component'
import { RegisterViewComponent } from './register-view/register-view.component'
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component'

const routes: Routes = [
  { path: 'login', component: LoginViewComponent },
  { path: 'signup', component: RegisterViewComponent },
  { path: 'dashboard', component: DashboardViewComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
