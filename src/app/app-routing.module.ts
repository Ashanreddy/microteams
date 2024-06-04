import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { FacultyListComponent } from './faculty-list/faculty-list.component';
import { UpdateFacultyComponent } from './update-faculty/update-faculty.component';
import { FacultyDetailsComponent } from './faculty-details/faculty-details.component';
import { UserfacultyUpdateComponent } from './userfaculty-update/userfaculty-update.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'user',component:UserDashboardComponent},
  {path:'admin',component:AdminDashboardComponent},
  {path: 'faculty-list',component:FacultyListComponent},
  {path:'update-faculty/:id', component:UpdateFacultyComponent},
  {path:'faculty-details/:id',component:FacultyDetailsComponent},
  {path:'userfaculty',component:UserfacultyUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
