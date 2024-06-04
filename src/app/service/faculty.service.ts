import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Faculty } from '../faculty';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {
  private baseURL="http://localhost:8080/auth/faculty";
  
  constructor(private httpClient:HttpClient) { }
  getFacultyList():Observable<Faculty[]>{
    return this.httpClient.get<Faculty[]>(`${this.baseURL}`);
}
CreateFaculty(faculty: FormData):Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`,faculty)
}
getFacultyById(id:number):Observable<Faculty>{
return this.httpClient.get<Faculty>(`${this.baseURL}/${id}`);
}
updateEmployee(id: number, faculty: Faculty): Observable<Object>{
  return this.httpClient.put(`${this.baseURL}/${id}`, faculty);
}
deleteFaculty(id: number): Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${id}`);
}
}