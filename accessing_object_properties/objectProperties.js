// Dot and Bracket notations

const person = {
    name: "Abraham",
    lastName: "Camargo",
    age: 26
};

// We are accessing the property of name inside of the person object with dot notation
console.log(person.name);

// Here we are accessing the properties of lastName and age of the person object with bracket notation
// Note that to target the property you soround the property name with quotes "" and inside a square bracket
console.log(person["lastName"]);
console.log(person["age"]);

// Array of object

const students = [
    {name: "Abraham", lastName: "Camargo", age: 26},
    {name: "Kevin", lastName: "Fiddick", age: 30},
    {name: "Chitra", lastName: "Rajavel", age: 42},
];

// Here we are accessing the properties name and lastName of the students array by stating the index[] we want to target and then the property .name or .lastName with dot notation
console.log(students[0].name + " " + students[0].lastName);
console.log(students[1].name + " " + students[1].lastName);
console.log(students[2].name + " " + students[2].lastName);

// here we are modifying the properties values
students[2].name = "Alex";
students[2].lastName = "Bonin";

console.log(students[2].name + " " + students[2].lastName);

const studentName = students.map(student => student.name); // This creates and array of all the students.name
console.log(studentName);

const adults = students.filter(student => student.age >= 28); // This returns an array of objects of the student if the student.age is greater or equal to 28
console.log(adults);

// Example of nested arrays and objects
const nestedObjectsAndArrays = {
    name: "Abraham",
    age: 26,
    hobbies: ["Coding", "Sports", "Building"],
    address: {
        street: "Street 1",
        city: "Arkansas",
        zip: 72761
    }
};

console.log(nestedObjectsAndArrays.name);
console.log(nestedObjectsAndArrays.age);
console.log(nestedObjectsAndArrays.hobbies[0]);
console.log(nestedObjectsAndArrays.hobbies[1]);
console.log(nestedObjectsAndArrays.hobbies[2]);
console.log(nestedObjectsAndArrays.address.street);
console.log(nestedObjectsAndArrays.address.city);
console.log(nestedObjectsAndArrays.address.zip);