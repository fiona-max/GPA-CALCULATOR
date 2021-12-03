import { Component, OnInit } from '@angular/core';
import {Student} from "../models/student";
import {StudentService} from "../services/student.service";

@Component({
  selector: 'app-listofstudents',
  templateUrl: './listofstudents.component.html',
  styleUrls: ['./listofstudents.component.css']
})
export class ListofstudentsComponent implements OnInit {
  listOfStudents : Student[] = [];
  selectedStudent? : Student ;

  onSelect(student: Student): void {
    this.selectedStudent = student;
  }

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getAllStudents()
  }

  getAllStudents(): void {
    this.studentService.getStudents()
      .subscribe(student => this.listOfStudents = student);
  }
}
