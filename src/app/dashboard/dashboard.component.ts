import { Component, OnInit } from '@angular/core';
import {Student} from "../models/student";
import {StudentService} from "../services/student.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  listOfStudents: Student[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents(): void{
     this.studentService.getStudents()
       .subscribe(student =>  this.listOfStudents = student.slice(1, 5))
  }

}
