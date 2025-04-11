/**
 * Abstraction: Finding out key feature and data hiding. private/protected
 * Encapsulation : Encapsulating 
 * Polymorphism
 * Inheritance
 *  Class : Its is template using which we will create object.
 *  
 * 
 */
/**
 * Access modifiers
 *  public : By Default its public
 *  private 
 *  protected : 
 */

// function add(a:number,b:number):void{
//     console.log(a+b);
// }

// function addTwoNumber(a:number,b:number):number{
//     return a+b;
// }

/**
 * Interface : abstracts 
 * Abstract Class
 * Class
 * 
 */

// interface payment{
//     upi()
//     cardpayment()
//     internetBanking()
// }
interface boy{
    name:string;
    hobbies():void;
}

interface girl{
    cooking():void;
}
/**
 * Impements : implementing an interface
 * extends :  we are extending the features of parent class to child class 
 */

class Student implements boy,girl{
    public publicVariable : string ="its a public variable";
    private privateVariable : string= 'its a private variable';
    protected protectedVariable: string = 'Its a protected Variable';
    cooking(): void {
        console.log("Students cook there food in the room");
    }
    name: string;
    
    hobbies(): void {
        console.log('Student likes to study and play');
    }

    displayPrivateVariable():void{
        console.log(this.privateVariable);
    }

}

class EngineeringStudent extends Student{

    displayChild(): void {
        console.log(this.protectedVariable);
        console.log(this.privateVariable);
    }
}

class PostStudent extends EngineeringStudent{
    displayGrandChild(): void {
        console.log(this.protectedVariable);
    }
}

let engStudent = new PostStudent();
engStudent.displayChild();
engStudent.displayGrandChild();


