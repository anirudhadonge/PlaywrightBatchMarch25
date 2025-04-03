/// Promise : I promise to return you the output --- positive or a negative output.

/// positive --- then()
/// Fails --- catch()

// let flag = false
// let a = 10
//  function fun1(){
//     return new Promise((resolve,reject)=>{
//         if(flag){
//             resolve(flag); /// Work successfully done--- data, object, number
//         }else{
//             reject(flag); /// Error due which work did not complete
//         }
//     })
//  }

//  let f1 = fun1();
//  f1.then((value)=>{
//     console.log(value);
//  }).catch((value)=>{
//     console.log(value);
//  })

async function fun1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Executing function 1");
      resolve("function 1 is executed");
    }, 4000);
  });
}

async function fun2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Executing function 2");
      resolve("function 2 is executed");
    }, 3000);
  });
}

async function fun3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Executing function 3");
      resolve("function 2 is executed")
    }, 2000);
  });
}


// let f1 = fun1();
// f1.then((value)=>{
//     console.log(value);
//     fun3().then((value)=>{
//         console.log(value)
//         fun2().then((value)=>{
//             console.log(value);
//         })
//     })
// })

await fun1();
await fun3();
await fun2();