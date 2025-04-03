/// Inheriting property of parent into the child.

//Father --- color, height, habbits
// child --- color, habbits

// org1

class human {
  a;
  b;
  c;
  constructor(name) {
    this.name = name;
  }

  sleep() {
    console.log("Human need 9 hours sleep");
  }// Polymorhpism (poly -- many, morph-- forms)

  display(){
    console.log(`name is ${this.name}`);
  }

  displayC(){
    console.log(this.c);
  }
}

class Employee extends human {
  constructor(name, empId) {
    super(name);
    this.empId = empId;
  }

  sleep() {
    console.log("Employee like resting in weekends");
  }

  add(a,b){
    this.a=a;
    this.b =b;
    this.c = this.a+this.b;
  }
}


let emp1 = new Employee('Anirudha','007')
console.log(emp1.name);
console.log(emp1.empId);
emp1.sleep();
emp1.display();

emp1.add(4,5)
emp1.displayC();