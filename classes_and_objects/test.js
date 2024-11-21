// Object Literal vs constructor functions

const objectLiteral = {
    num1: 0,
    num2: 0,
    num3: 0,
    addNumbers: function() {
        return this.num1 + this.num2 + this.num3;
    }
};


const ObjectConstructor = function(_num1, _num2, _num3) {
    let num1 = _num1; // Private
    let num2 = _num2; // Private
    this.num3 = _num3; // Public
    this.addNumbers = function() {
        return num1 + num2 + this.num3; // Note that num1 and num2 do not need this.
    }
};

objectLiteral.num1 = 3;
objectLiteral.num2 = 2;
objectLiteral.num3 = 1;
console.log(objectLiteral.addNumbers());

let objectConstructorInstance = new ObjectConstructor(3, 2, 1); // Instance of ObjectConstructor
console.log(objectConstructorInstance.addNumbers());
console.log((new ObjectConstructor(7, 8, 9)).addNumbers()); // Another instance of ObjectConstructor
console.log(objectConstructorInstance.addNumbers()); // Same result, not affected by previous line