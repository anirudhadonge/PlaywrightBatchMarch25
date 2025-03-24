/**
 * for in // It would work with Keys of Object or Array 
 * for of // It deals with only the values of the Array
 */

// for in

let fruits = ["Apple", "Banana", "Kiwi", "Orange"]; 
/**
 * {
 * 0:"Apple",
 * 1:"Banana"
 * 2:"Kiwi"
 * 3:"Orange"
 * }
 * 
 */
// let student ={
//     name:"Anirudha",
//     rollNumber:7,
//     city:'Pune',
//     MobileNo:123456789
// }
// for(let key in student){
//     console.log(key+' :'+student[key]);
// }


// for(let fruit in fruits){
//     console.log(fruit+' :'+fruits[fruit]);
// }


for(let fruit in fruits){
    console.log(fruit);
}