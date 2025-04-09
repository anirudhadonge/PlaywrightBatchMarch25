import b from "./ImportsAndExports.js"; // default export
import {student} from './ImportsAndExports.js' // named export
/*
Default Export
You can import it with any name 
while importing you need not to declare it inside the brackets.
Every file can only have one default export.
*/

/*
Named Export
you need to import it with same name which is mention at the time export
While importing it you need to declare in the brackets
you can have multiple named exports in a file.
*/

// const class1Student = new student('anirudha',7);
// class1Student.display();

let batch = new b('playwright',7);
batch.displayOfDefault();

let classStudent = new student('anirudha',7)
classStudent.display();