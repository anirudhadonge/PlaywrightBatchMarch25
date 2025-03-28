/**
 * While executing a code there might be some error that might come up and not not handelled your application might crash
 * Error Handeling
 * try, catch , finally , throw Number, String, Boolean or Object
 */
/**
 * throw 500;
 * throw "This is a custom error"
 * throw false;
 * throw {a:10,b:20} * 
 * 
 */
/// When you are connecting to database base
// function divide(a,b){
//     // creating a connection
//     try{
        
//         // performing some action;
//            //throw "This is an Exception"
//            console.log("I am try block and no exception is throw");
//     }catch(err){
//         console.log("I am in Catch Block");
//         console.log(err)
//     }finally{
//     // close the connection
//        console.log("Finally Block got executed") 
//     }
//     return 0
// }


// console.log(divide(10,0));// Divided by Zero


/// When you want somebody else to handeling the exception your throw and if you want to
/// throw custom exception then you will be using throw.



// function throwException(a){
//     try{
//     console.log('print '+a);
//     }catch(error){
//         throw error
//     }

// }

// function handlesException(){
//     try{

//     throwException(b);
//     }catch(err){
//         console.log(err);
//     }
// }
// //throwException(b);
// handlesException();

// let myArray=[1,2,3,4,5,6]

// console.log(myArray[6]);