import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Student} from "../models/student";
import { STUDENTS } from  "../models/mock-students";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentsUrl = 'api/STUDENTS';  // URL to web api

  constructor(private http: HttpClient)
  { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsUrl)
  }

  getStudent(name:string): Observable<any> {
    return of(STUDENTS.find(student => student.name === name));


  }
}
