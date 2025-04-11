// /// Instance variable/Methods
// /// Class Variable/Methods

// class Student{

//     static totalStudents=10;
//     constructor(name){
//         this.name = name;// instance variable 
//     }

//     display(){
//         console.log(`name is ${this.name}`);
//     } // Instance method

//     static displayNumberStudents(){
//         console.log(Student.totalStudents);
//     }

//     assignNumber(myNumber){
//         this.myNumber = myNumber;
//     }

//     squareOfNumber(){
//         return this.myNumber*this.myNumber
//     }
// }


// // let student = new Student("Anirudha");

// // console.log(student.name)
// // student.display();
// // console.log(Student.totalStudents);// class Variable 
// // Student.displayNumberStudents();// Class Method


// function StudentMethod(name,myNumber){
//     const student = new Student(name);
//     student.display();
//     student.assignNumber(myNumber)
//     console.log(student.squareOfNumber());
//     Student.displayNumberStudents();
//     Student.totalStudents = Student.totalStudents+1;
//     Student.displayNumberStudents();
// }
// StudentMethod('Noopur',5);
// StudentMethod('Anjali',10);
// StudentMethod('Varun',25);