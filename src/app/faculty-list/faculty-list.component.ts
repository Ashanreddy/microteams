import { Component, OnInit } from '@angular/core';
import { Faculty } from '../faculty';
import { FacultyService } from '../service/faculty.service';
import { Router } from '@angular/router';
import { FileHandle } from '../model/file-handle';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-faculty-list',
  templateUrl: './faculty-list.component.html',
  styleUrls: ['./faculty-list.component.css']
})
export class FacultyListComponent implements OnInit{
  faculty: Faculty=new Faculty();
 
  constructor(private facultyservice:FacultyService,private router:Router,private sanitizer:DomSanitizer) {
     
  }
  ngOnInit(): void {
    
  }
  saveFaculty(){
    
    const facultyformdata=this.prepareFormData(this.faculty)
    this.facultyservice.CreateFaculty(facultyformdata).subscribe(data=>{
      console.log(data);
      this.goToFacultyList();
    },error=>console.log(error));
    
  }
  prepareFormData(faculty:Faculty):FormData{
   
    const formData=new FormData();
    formData.append(
      'faculty',
      new Blob([JSON.stringify(faculty)],{type:'application/json'})
    );
    for(var i=0;i<faculty.facultyimages.length;i++){
      formData.append(
        'imageFile',
        faculty.facultyimages[i].file,
        faculty.facultyimages[i].file.name,
       
       
      );
    }
    return formData;
  }
  
  file: File | undefined;
  onFileSelected(event:any){
    if(event.target.files){
      const file=event.target.files[0];

      const filehandle:FileHandle={
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        ),
        
      }
      this.faculty.facultyimages.push(filehandle);
    }
  }
   goToFacultyList(){
     this.router.navigate(['/admin']);
    
   }
  

  onsubmit(){
    console.log(this.faculty)
    this.saveFaculty();
  }
}
