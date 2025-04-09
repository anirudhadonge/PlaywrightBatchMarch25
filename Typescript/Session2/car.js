function Car(name, model, year) {
    this.name = name;
    this.model = model;
    this.year = year;

}
Car.prototype.display = function () {
    console.log(`Car is ${this.name} and the model is ${this.model} and the year is ${this.year}`);
};
var myCar = new Car("Maruti", "LXI", 2025);
myCar.display();