import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Faculty } from 'src/app/faculty';
import { FacultyService } from 'src/app/service/faculty.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{
  faculty: Faculty = new Faculty();
  
    "faculties":Faculty[]=[
      
    ];
    constructor(private facultyservice:FacultyService,private router:Router) {}
    ngOnInit(): void {
      this.getFaculties();
    }
    private getFaculties(){
      this.facultyservice.getFacultyList().subscribe(data=>{
        this.faculties=data;
      })
    }
     showImage(faculty:Faculty){
      this.getFaculties;
console.log(faculty)
    }
    facultyDetails(id:number){
      this.router.navigate(['faculty-details',id]);
          }
    updateFaculty(id:number){
      this.router.navigate(['update-faculty',id]);
          }
    deleteFaculty(id:number){
this.facultyservice.deleteFaculty(id).subscribe(data=>{
  console.log(data);
  this.getFaculties();
})
    }
    }
  
