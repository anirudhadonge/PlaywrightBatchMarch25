/**
 *  Abstract Class 
 * 1. You cannot create an object of the abstract class
 * 2. you a combination of abstract methods and implemented methods.
 */


abstract class abClass{
    private val1:number;
    protected val2:string
    // constructor(val1:number, val2:string){
    //     this.val1 = val1;
    //     this.val2 = val2;
    // }

    display(){
        console.log(`${this.val1} and ${this.val2}`)
    }
    
    getVal1():number{
        return this.val1;
    }

    abstract howToDrive()
}

class childClass extends abClass{
    constructor(childVal1:number, childVal2:string){
        super()
    }

    getVal2():string{
        return this.val2;
    }

    howToDrive() {
        console.log("Learn using your own car");
    }
}

let abClassObj = new childClass();