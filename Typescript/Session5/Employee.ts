


interface IEmployee{
    name:string,
    empId:number,
    department:string
    position:string
    salary(baseSalary:number):number;

    set setEmpid(empID:number);

    get getEmpId():number;
}


class Employee implements IEmployee{
    name: string;
    empId: number;
    department: string;
    position: string;
    protected totalSalary:number;
    private privateVar;
    static company:string

    constructor(name:string,empId:number,department:string,position:string){
        this.name=name;
        this.empId = empId;
        this.department=department;
        this.position=position;
        Employee.company ="Bajaj"
    }
    get getEmpId(): number {
        return this.empId;
    }
    set setEmpid(empID: number) {
        this.empId = empID;
    }
    salary(baseSalary:number): number {

       return baseSalary;
    }

}


class Manager extends Employee{
    //company;
    constructor(name:string,empId:number,department:string,position:string){
        super(name,empId,department,position)
        //Manager.company = "Tata motors"
    }

    salary(baseSalary:number):number{

        return baseSalary*3;
    }
}

let engineer = new Employee('Hitesh',1,'Engineering','Junior Engineer');
console.log(engineer.salary(30000));
console.log(Employee.company);
let manager = new Manager('Herin',2,"Engineering","Manager");
Manager.company= "Abcd"
console.log(Manager.company)
console.log(manager.salary(30000));

console.log(Employee.company);
console.log(Manager.company)
