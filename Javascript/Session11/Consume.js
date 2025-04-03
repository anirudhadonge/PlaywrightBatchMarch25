//const {add,substract} = require('./Modules.js')// Commonjs way of exporting and importing.
import {Student} from '../../Student.js'; // ESModules 
import {add, substract} from './Modules.js'
console.log("Addition of two Numbers:"+add(5,6))

console.log(substract(5,4));

let myStudent = new Student('Anirudha');
myStudent.display();