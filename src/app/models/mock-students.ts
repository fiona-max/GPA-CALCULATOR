import { Student } from './student';
import { Courses } from './courses';

const COURSES : Courses[] = [
  new Courses("fre 101", 6, 98),
  new Courses("csc 413", 6, 76),
  new Courses("csc 405", 6, 89),
  new Courses("csc 407", 6, 65),
  new Courses("csc 403", 6, 69)
]
const COURSES1 : Courses[] = [
  new Courses("fre 101", 6, 68),
  new Courses("csc 313", 6, 76),
  new Courses("csc 205", 6, 69),
  new Courses("csc 207", 6, 35),
  new Courses("csc 403", 6, 49)
]
const COURSES2 : Courses[] = [
  new Courses("csc 301", 6, 70),
  new Courses("csc 209", 4, 72),
  new Courses("csc 211", 4, 83),
  new Courses("csc 207", 6, 45),
  new Courses("csc 203", 6, 61)
]
const COURSES3 : Courses[] = [
  new Courses("Spt 100", 2, 96),
  new Courses("csc 310", 6, 76),
  new Courses("csc 308", 6, 89),
  new Courses("csc 306", 6, 65),
  new Courses("csc 402", 6, 69)
]
const COURSES4 : Courses[] = [
  new Courses("eng 101", 2, 98),
  new Courses("csc 313", 6, 76),
  new Courses("csc 305", 6, 89),
  new Courses("csc 207", 6, 65),
  new Courses("csc 303", 6, 69)
]
const COURSES5 : Courses[] = [
  new Courses("cst 301", 4, 58),
  new Courses("csc 413", 6, 76),
  new Courses("csc 405", 6, 80),
  new Courses("csc 307", 6, 65),
  new Courses("csc 212", 4, 49)
]


export const STUDENTS : Student[] = [
  new Student("SC18b111","John",COURSES),new Student("SC17b111","Peter",COURSES1),new Student("SC18b751","Moses",COURSES2),
  new Student("SC18A115","Jeremiah",COURSES3),new Student("SC18b201","samson",COURSES4),new Student("SC18b134","Mary",COURSES5)

]
