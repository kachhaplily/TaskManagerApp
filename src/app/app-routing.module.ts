import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Components/Registration/register/register.component';
import { LoginComponent } from './Components/Login/login/login.component';
import { TaskDashboardComponent } from './View/DashBoard/task-dashboard/task-dashboard.component';
import { AuthGuard } from './Guard/auth.guard';
import { UserProfileComponent } from './Components/UserProfile/user-profile/user-profile.component';
import { AddtaskComponent } from './Components/AddTask/addtask/addtask.component';


const routes: Routes = [
  { path: "reg", component: RegisterComponent },
  { path: "", component: LoginComponent },
  {
    path: 'dashboard', component: TaskDashboardComponent, canActivate: [AuthGuard],
    children: [
       { path: "user", component: UserProfileComponent }, ]
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
