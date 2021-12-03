import { Injectable } from '@angular/core';
// import { InMemoryDbService } from 'angular-in-memory-web-api';
//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './in-memory-data.service';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Courses} from "../models/courses";
import {Student} from "../models/student";

@Injectable({
  providedIn: 'root'
})
// export class InMemoryDataService {
//
//   constructor() { }
// }
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const COURSES : Courses[] = [
      new Courses("fre 101", 6, 98),
      new Courses("csc 413", 6, 76),
      new Courses("csc 405", 6, 89),
      new Courses("csc 407", 6, 65),
      new Courses("csc 403", 6, 69)
    ]
    const COURSES1 : Courses[] = [
      new Courses("fre 101", 6, 98),
      new Courses("csc 413", 6, 76),
      new Courses("csc 405", 6, 89),
      new Courses("csc 407", 6, 65),
      new Courses("csc 403", 6, 69)
    ]
    const COURSES2 : Courses[] = [
      new Courses("fre 101", 6, 98),
      new Courses("csc 413", 6, 76),
      new Courses("csc 405", 6, 89),
      new Courses("csc 407", 6, 65),
      new Courses("csc 403", 6, 69)
    ]
    const COURSES3 : Courses[] = [
      new Courses("fre 101", 6, 98),
      new Courses("csc 413", 6, 76),
      new Courses("csc 405", 6, 89),
      new Courses("csc 407", 6, 65),
      new Courses("csc 403", 6, 69)
    ]
    const COURSES4 : Courses[] = [
      new Courses("fre 101", 6, 98),
      new Courses("csc 413", 6, 76),
      new Courses("csc 405", 6, 89),
      new Courses("csc 407", 6, 65),
      new Courses("csc 403", 6, 69)
    ]
    const COURSES5 : Courses[] = [
      new Courses("fre 101", 6, 98),
      new Courses("csc 413", 6, 76),
      new Courses("csc 405", 6, 89),
      new Courses("csc 407", 6, 65),
      new Courses("csc 403", 6, 69)
    ]

    const STUDENTS : Student[] = [
      new Student("SC18b111","John",COURSES),new Student("SC17b111","Peter",COURSES1),new Student("SC18b751","Moses",COURSES2),
      new Student("SC18A115","Jeremiah",COURSES3),new Student("SC18b201","samson",COURSES4),new Student("SC18b134","Mary",COURSES5)

    ];

    return {STUDENTS};
  }

}
