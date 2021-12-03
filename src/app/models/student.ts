// export interface Student {
//
// }
// import { Courses } from './courses';

import {Courses} from "./courses";

export class Student{
   matNo: string;
   name: string;
   courses: Courses[];
   GPA: number;

  constructor(matNo:string, name:string, courses:Courses[]){
    this.matNo = matNo;
    this.name = name;
    this.courses = courses;

    this.GPA = this.setGPA()
  }


  setGPA():number{
    let sumOfCoursePoint = 0
    let sumOfCreditValue = 0
    let i = 0

    for(i=0;i<this.courses.length;i++){
      sumOfCoursePoint += this.courses[i].coursePoint
      sumOfCreditValue += this.courses[i].CValue
    }

    return sumOfCoursePoint/sumOfCreditValue
  }


}
