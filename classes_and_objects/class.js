class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};

const person1 = new Person("John", "Doe"); // This line of code creates and object with the following key pair - values {firstName: "John", lastName: "Doe"}
console.log(person1); // By console logging this line of code it logs the actual object
console.log(person1.getFullName()); // By console logging this line of code it logs John Doe


class Car {
    constructor(model, year, color, type){
        this.model = model;
        this.year = year;
        this.color = color;
        this.type = type;
    }

    getFullCarDetails() {
        return `The car is a ${this.model} ${this.year} with the color of ${this.color} and type is ${this.type}`
    }
};

const car1 = new Car("Nissan Sentra", 2019, "Dark Blue", "Basic");
const car2 = new Car("Chevrolet Silverado", 2012, "Grey", "Pickup");
const car3 = new Car("Tesla Model 3", 2024, "Dark Blue", "Basic");

console.log(car1.getFullCarDetails());
