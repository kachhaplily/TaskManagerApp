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
import { AddtaskComponent } from './Components/AddTask/addtask/addtask.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import { AllTaskComponent } from './Components/AllTask/all-task/all-task.component';
import {MatCardModule} from '@angular/material/card';
import { CapitalizePipe } from './Pipes/Capital/capitalize.pipe';
import { MatMenuModule } from '@angular/material/menu';
import { SearchbarComponent } from './Components/SearchBar/searchbar/searchbar.component';
import { CardComponent } from './Components/CardTask/card/card.component';
import { SearchTaskPipe } from './Pipes/search/search-task.pipe';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    RoutingComponent,
    LoginComponent,
    TaskDashboardComponent,
    NavbarComponent,
    UserProfileComponent,
    AddtaskComponent,
    AllTaskComponent,
    CapitalizePipe,
    SearchbarComponent,
    CardComponent,
    SearchTaskPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,MatCardModule,
    FormsModule,MatNativeDateModule,MatMenuModule,
    ReactiveFormsModule,MatSelectModule,MatRadioModule,
    HttpClientModule,MatToolbarModule,MatSidenavModule,MatListModule,MatDialogModule,MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
