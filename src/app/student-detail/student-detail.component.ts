import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {StudentService} from "../services/student.service";
import {Student} from "../models/student";


@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  @Input() selectedStudent?: Student ;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getStudent()
  }

  getStudent(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.studentService.getStudent(String(name))
      .subscribe(student => this.selectedStudent = student);
  }

  goBack(): void {
    this.location.back();
  }

}
