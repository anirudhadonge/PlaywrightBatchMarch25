/**
 * 1. let <function name> = function (){}
 * 2. function <FunctionName>(){}
 * 3. Array function ()=>{}   
 *  
 */



// let myFunction = function (){
//     console.log('This is my first function');
// }


// myFunction();

// let add = function (a,b){
//     return a+b;
// }


// console.log(add(4,5));


// function add(a,b){
//     return a+b;
// }

// console.log(add(4,5));
let a=4;
let b =5;

// setTimeout(()=>{
//     console.log("Print this sentence after 3000")
// },3000)


function printLine(myFunction){
    console.log("This is print line function");
    myFunction();
}


printLine(()=>{console.log('This is the on the fly function')})