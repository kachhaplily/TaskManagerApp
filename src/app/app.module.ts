import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './Components/Registration/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule,} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RoutingComponent } from './Routes/routing/routing.component';
import { LoginComponent } from './Components/Login/login/login.component';
import { TaskDashboardComponent } from './View/DashBoard/task-dashboard/task-dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from './Components/Navbar/navbar/navbar.component';
import { UserProfileComponent } from './Components/UserProfile/user-profile/user-profile.component';
import { SideToolbarComponent } from './Components/Sidevarbar/side-toolbar/side-toolbar.component';
import { AddtaskComponent } from './Components/AddTask/addtask/addtask.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    RoutingComponent,
    LoginComponent,
    TaskDashboardComponent,
    NavbarComponent,
    UserProfileComponent,
    SideToolbarComponent,
    AddtaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
