import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Faculty } from 'src/app/faculty';
import { FacultyService } from 'src/app/service/faculty.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit{
  faculty: Faculty = new Faculty();
  
    "faculties":Faculty[];
    constructor(private facultyservice:FacultyService,private router:Router) {}
    ngOnInit(): void {
      this.getFaculties();
    }
    private getFaculties(){
      this.facultyservice.getFacultyList().subscribe(data=>{
        this.faculties=data;
      })
    }
    facultyDetails(id:number){
      this.router.navigate(['faculty-details',id]);
          }
    updateFaculty(id:number){
      this.router.navigate(['update-faculty',id]);
          }
    
    
    }


