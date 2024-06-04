import { Component, OnInit } from '@angular/core';
import { Faculty } from '../faculty';
import { FacultyService } from '../service/faculty.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-faculty',
  templateUrl: './update-faculty.component.html',
  styleUrls: ['./update-faculty.component.css']
})
export class UpdateFacultyComponent implements OnInit {
  "id":number;
  faculty: Faculty=new Faculty();
  constructor(private facultyservice:FacultyService,private route:ActivatedRoute,private router:Router) {}
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.facultyservice.getFacultyById(this.id).subscribe(data=>{
      this.faculty=data;
    },error=>console.log(error));
  }
    updateFaculty(){
      this.facultyservice.updateEmployee(this.id,this.faculty).subscribe(data=>{
        console.log(data);
        this.faculty=new Faculty();
        this.goToList();
      },error=>console.log(error));
    
    }
  goToList() {
    this.router.navigate(['/admin']);
  }
  
    
    onsubmit(){
      console.log(this.faculty)
      this.updateFaculty();
    }
    
  }

