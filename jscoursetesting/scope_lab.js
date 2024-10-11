// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";

{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

//Block Scope
console.log(blockVar);
// console.log(blockLet); // Throws ReferenceError not defined

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
}
show();

// console.log(functionVar); // Throws ReferenceError not defined
// console.log(functionLet); // Throws ReferenceError not defined
// console.log(functionConst); // Throws ReferenceError not defined

// Practice
{
    var practice1 = "Hello World";
    let practice2 = "Hello Abraham";
    const practice3 = "Hello Coursera"

    practice1 = "Hello"; // Reassigns the value of practice 1
    practice2 = "Abraham"; // Reassigns the value of practice 2
    // practice3 = "Coursera"; // const values cannot be reassigned

    console.log(practice1); // Logs Hello
    console.log(practice2); // Logs Abraham
    console.log(practice3); // Logs Hello Coursera 
}