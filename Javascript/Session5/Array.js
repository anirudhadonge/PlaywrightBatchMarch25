/**
 * Arrays
		1. What is an Array and how is it declared
		2. Array Elements using Index
		3. Push Method
		4. POP metho
		5. Splice method
		6. Length
		7. Sort (Numbers and string)
		8. Iterating Array
			i. forEach
			ii. Map
            iii.Filter
 */

// It is a collection of items (number, string)
// In javascript Array can be Heterogenous and also Can homogenous
/// Collection of different types of items--- Heterogenous
/// Collection of same types of items -- homogenous

// Homogenous
/**
 * {
 * 0:'Apple',
 * 1:'Banana'
 * 2:'Kiwi'
 * 3:'Orange'
 * }
 */

// let student = {
//   name: "Anirudha",
//   rollNo: 7,
// };
// let myArray = ["Anirudha", true, 4, 5]; // Heterogenous array.

// let myAr =[];
// let myAr1 = new Array();
// console.log(typeof(myAr));

// console.log(typeof(myAr1));

// console.log(fruits[1]);
// console.log(student['name']);

// for(let i=0;i<fruits.length;i++){
// 	console.log(fruits[i]);
// }

/// Adding an element in array , there is method called as Push

//fruits.push("Guava", "PineApple");

// console.log(fruits);

// delete element in an Array , there is a method called pop

// fruits.pop();

// console.log(fruits);

/// If I want to Add or remove element at a index , there is method called as Splice

// fruits.splice(1,2);

// console.log(fruits);

// fruits.splice(1, 0, "Mango", "Berry");
// 'jackfruit'
// //  console.log(fruits);

// let myNumber = [45, 2, 13, 89, 1];
// myNumber.sort((a, b) => a-b);
// console.log(myNumber);


// fruits.sort();
// console.log(fruits);

// Iterating the array
/**
 * forEach
 * map
 * filter
 */
// for(let i=0;i<fruits.length;i++){
// 	console.log(fruits[i]);
// }
// function printValue(value){
// 	console.log(value);
// }
/// forEach

// let fruits = ["Apple", "Banana", "Kiwi", "Orange"]; 
// let index = 0;
// let fruit ='Kiwi';
// fruits.forEach((value)=>{
	
// 	if(value ==fruit){
// 		fruits.splice(index,1);
// 	}
// 	index++
// })

// console.log(fruits);


/**
 * Map - IF you want some action on each element 
 * 
 */

// let newFruits = fruits.map((value)=>{
// 	return value+" $"
// })
// console.log(newFruits);
// console.log(fruits);
//fruits.map()

// fruits.forEach((value)=>{
// 	console.log(value+" $");
// })
// console.log(fruits);
// console.log(newFruits);

// let myNumArray=[4,67,8,21,45]

// let newNumArray = myNumArray.filter((value)=>{
// 	return 4<value && value<40;
// })
// console.log(myNumArray);
// console.log(newNumArray);
// let myNewArray=[];
// for(let i = 0 ; i<myNumArray.length;i++){
// 	if(4<myNumArray[i] && myNumArray[i]<40){
// 		myNewArray.push(myNumArray[i]);
// 	}
// }
// console.log(myNumArray);
// console.log(myNewArray);

/**
 * Concat Arrays 
 * concat method
 * '...'<ArrayName>
 */
// let fruits = ["Apple", "Banana", "Kiwi", "Orange"]; 
// let newFruits = ['PineApple','Berry'];
// //console.log(fruits.concat(newFruits));
// console.log([...fruits,...newFruits]);
// let newArrayFruits = [...fruits,...newFruits];//fruits.concat(newFruits)

// console.log(newArrayFruits);

 let fruits = ["Apple", "Banana", "Kiwi", "Orange"]; 


//  console.log(fruits.filter((value)=>{
// 	if( value.includes('a') || value.includes('A')){
// 		return value +"$";
// 	}
//  }))


 function MapFiler(arrayList,condtion,action){
	let newFilter = arrayList.filter((value)=>{
		return value.includes(condtion);
	})

	return newFilter.map((value)=>{
		return value +action
	})
 }

 console.log(MapFiler(fruits,'a','$'));