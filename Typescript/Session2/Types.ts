/**
 * Variables are declared
 * string
 * Number
 * Boolean
 * Arrays
 * Function
 *  *parameter
 *  *return
 *  Object 
 *   *Optional Properties
 *  Union Type
 *  Interfaces/types Asliases
 *   
 */
// let myString:string;
// let myVariable =" typescript class";
// let myNumber : number;

//Arrays 

// let myArray:string[] =["ANirudha",false, 1];
// let myNumberArray:number[]=[] ;

// myNumberArray.push(1);
// myNumberArray.push('Anirudha');

// let myArray;
// myArray.push(1);
// myArray.push('Anirudha');
// myArray.push(true)

// myArray.forEach((element) => {
//     console.log(typeof(element));
// });
// console.log(myArray);

// There is one type called as Any

// let myVariable:string;
// myVariable = 5;
// myVariable = 'Anirudha'
// myVariable =false;
// let myVar:any; // Please dont use any
// console.log(typeof(myVar));
// myVar = 5;
// console.log(typeof(myVar))
// myVar = 'Anirudha';
// console.log(typeof(myVar))
// myVar = false;
// console.log(typeof(myVar))


// function myFunc(a:string,b:string):number{
//     return Number(a)+Number(b);
// }


// console.log(myFunc('anirudha','11'));

//Objects 
// let obj ={
//     name:'Anirudha',
//     rollno:7
// }

//Type Aliases
// Interface 


// type Student ={
//     name:string;
//     rollNo:number;
// }


// let student:Student ={
//     name:"anirudha",
//     rollNo:7
// }

// let student1:Student ={
//     name:'Anjali',
//     rollNo:9
// }

// interface Student {
//     name:string,
//     rollNo:number
// }

// let student:Student ={
//     name:"anirudha",
//     rollNo:7
// }

// let student1:Student ={
//     name:'Anjali',
//     rollNo:9
// }

class Car {
    name: string;
    model: string;
    year: number;

    constructor(name:string, model:string, year:number) {
        this.name = name;
        this.model = model;
        this.year = year;
    }


    display(){
        console.log("this is a display method")
    }
}

let myCar = new Car("Maruti","LXI",2025);
myCar.display();