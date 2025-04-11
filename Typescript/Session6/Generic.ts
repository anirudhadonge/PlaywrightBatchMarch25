/**
 * Its a way to write a reusuable , flexible and type-safe code
 *
 *
 */

function display<U,L>(val1: U,val2:L) {
  console.log(`${typeof val1} and value is ${val1}`);
  console.log(`${typeof val2} and value is ${val2}`);
}

// function display(val1:number|string|boolean){
//     console.log(typeof(val1));
//     console.log(val1);
// }

// function displayString(val1:string){
//     console.log(typeof(val1));
//     console.log(val1);
// }

// function displayBool(val1:boolean){
//     console.log(typeof(val1));
//     console.log(val1);
// }


display<number,string>(5,'string');
display<string,number>("anirudha",6);
display<boolean,string[]>(false,['banana','kiwi','Orange']);
display<string[],{}>(['banana','kiwi','Orange'],{name:'ANirudha'})