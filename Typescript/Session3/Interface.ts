// // Optional  ?  is used in front of the property then then property becomes optional 

// /// Union Type

// /// Default value


// // let student2:Student ={
// //     name:'Hitesh',
// //     rollNo:'7'
// // }


// function add(a:number ,b:number|string):number|string{
//     if(typeof(b)=='string'){
//         return (a+b).toString();
//     }
//     return a+b;
// }

// // function addTwoNumber(a:number,b:number=5):number{
// //     // if(typeof(b)=='number'){
// //     //     return a+b;
// //     // }
// //     // return a;
// //     return a+b;
// // }

// // console.log(addTwoNumber(6));
// // console.log(addTwoNumber(3));

// interface Student {
//     name:string
//     rollNo:number; //Union Type
// }

// interface Player{
//     Game:string
// }

// interface EngStudent extends Student,Player{
//     subject:string;
// }

// let mechanicalStudent: EngStudent={
//     name:'Anirudha',
//     rollNo:7,
//     subject:'Mech',
//     Game:"soccor"
// }


// // null is a standalone value
// // Undefined 