import { Component, OnInit } from '@angular/core';
import { Faculty } from '../faculty';
import { FacultyService } from '../service/faculty.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-faculty-details',
  templateUrl: './faculty-details.component.html',
  styleUrls: ['./faculty-details.component.css']
})
export class FacultyDetailsComponent implements OnInit{
  "id":number;
  faculty: Faculty=new Faculty();
  constructor(private facultyservice:FacultyService,private route:ActivatedRoute) {}
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.faculty=new Faculty();
    this.facultyservice.getFacultyById(this.id).subscribe(data=>{
      this.faculty=data;
    })
  }

}
