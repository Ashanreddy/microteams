import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component'
import { FacultyListComponent } from './faculty-list/faculty-list.component';
import { UpdateFacultyComponent } from './update-faculty/update-faculty.component';
import { FacultyDetailsComponent } from './faculty-details/faculty-details.component';
import { UserfacultyUpdateComponent } from './userfaculty-update/userfaculty-update.component';

@NgModule({
  declarations: [
    AppComponent,
   
    LoginComponent,
    SignupComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    FacultyListComponent,
    UpdateFacultyComponent,
    FacultyDetailsComponent,
    UserfacultyUpdateComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
