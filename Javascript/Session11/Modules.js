/**
 * Pieces of Code at one location and using it in other file or location
 * 1. Commonjs
 * 2. EsModule (Latest exporting modules(functions, class))
 */

export default function add(a,b){
    return a+b;
}

export function substract(a,b){
    return a-b
    
}

//module.exports={add,substract} //commonJs
