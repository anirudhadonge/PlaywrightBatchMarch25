/**
 * Classes : are Template which can be used to create object
 * Constructor : Keyword call "constructor", constructor cannot be overloaded
 * Class method
 * Instance method
 * Class variable // static 
 * Instance Variable
 * Abstraction 
 * Incapsulation
 * Inherit class 
 * Polymorphism
 */
/**
 * Access modifier
 * public 
 * private
 */
/**
 * Variable should be declared using Camel Case  e.g. myClassObject
 * Class name should be declared using Pascal case MyClassObject
 * 
 */
/**
 * get, set 
 * 
 */

/**
 * C#,Java,C++ the constructor method name is same as a class name.
 */
class MyClass{
    #pval4;
    constructor(val1,val2,val3,val4){
        this.val1= val1;
        this.val2 = val2;
        this.val3 = val3;
        this.#pval4 = val4
        console.log(`val1 : ${val1} and val2 is ${val2}`);
    }

    display(){  /// Instance Method
        this.val3= 10
        let a = 10;
        console.log(this.val3);
    }

    set setVal4(val4){
        this.#pval4 = val4
    }

    get getVal4(){
        return this.#pval4;
    }

}

/// Creating an object of the class, we need to use 'new' keyword
let myClassObject = new MyClass(4,5,3,6);/// INitializing the class ---> I am occuping a member locator to store data

console.log(myClassObject.val1);
console.log(myClassObject.val2);
console.log(myClassObject.val3);
console.log(myClassObject.getVal4);
myClassObject.display();

console.log(myClassObject.val3);
