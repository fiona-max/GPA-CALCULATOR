export class Courses{
  CCode: string;
  CValue: number;
  score_on_100 :number;
  letterGrade : string = '';
  gradePoint : number = 0;
  coursePoint: number;

  constructor(CCode: string, CValue : number, score_on_100: number){
    this.CCode = CCode;
    this.CValue = CValue;
    this.score_on_100 = score_on_100;
    this.setLetterGrade();
    this.setGradePoint();
    this.coursePoint = (this.CValue * this.gradePoint)
  }

  course_points(CV:number,GP:number){
    var CP = CV * GP;
    console.log("course points: ",CP);
  }

  gradepoint_average(CP:number, CV:number){
    var GPA = CP/CV;
    console.log("Grade Point Average: ",GPA);
  }

  setLetterGrade(){
    if(this.score_on_100<=100 && this.score_on_100>=80)
      this.letterGrade  = "A"
    if(this.score_on_100<=79 && this.score_on_100>=70)
      this.letterGrade  = "B+"
    if(this.score_on_100<=69 && this.score_on_100>=60)
      this.letterGrade  = "B"
    if(this.score_on_100<=59 && this.score_on_100>=55)
      this.letterGrade  = "C+"
    if(this.score_on_100<=54 && this.score_on_100>=50)
      this.letterGrade  = "C"
    if(this.score_on_100<=49 && this.score_on_100>=45)
      this.letterGrade  = "D+"
    if(this.score_on_100<=44 && this.score_on_100>=40)
      this.letterGrade  = "D"
    if(this.score_on_100<=39 && this.score_on_100>=0)
      this.letterGrade  = "F"
  }

  setGradePoint(){
    switch(this.letterGrade){
      case "A":
        this.gradePoint = 4.0
        break;
      case "B+":
        this.gradePoint = 3.5
        break;
      case "B":
        this.gradePoint = 3.0
        break;
      case "C+":
        this.gradePoint = 2.5
        break;
      case "C":
        this.gradePoint = 2.0
        break;
      case "D+":
        this.gradePoint = 1.5
        break;
      case "D":
        this.gradePoint = 1.0
        break;
      case "F":
        this.gradePoint = 0.0
        break;
    }
  }

}
