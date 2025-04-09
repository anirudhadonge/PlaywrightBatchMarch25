/**
 * Default export 
 * Named Export
 * 
 */

// Default export
export default class batch{
    constructor(course, numberStudents){
        this.course = course;
        this.numberStudents = numberStudents;
    }

    displayOfDefault(){
        console.log(`course ${this.course} and number of student are ${this.numberStudents}`);
    }
}


// Named export
export class student{
    constructor(name, rollNo){
        this.name = name;
        this.rollNo = rollNo;
    }

    display(){
        console.log(`name ${this.name} and roll Number ${this.rollNo}`);
    }
}