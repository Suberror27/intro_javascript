/*----------------------------------------------------------------------------------------------------------------------------------------------------------------- */
// Push method
const fruitsPush = ["Apple", "Banana", "Cherry", "Orange"];

// Adding one or more elements to the end of the array
// Returns new length
fruitsPush.push("Extra fruit 1", "Extra fruit 2");

// Logs ['Apple', 'Banana', 'Cherry', 'Orange', 'Extra fruit 1', 'Extra fruit 2']
console.log("After using Push method: " + fruitsPush); 

/*----------------------------------------------------------------------------------------------------------------------------------------------------------------- */

// Pop method
const fruitsPop = ["Apple", "Banana", "Cherry", "Orange"];

// Removes the last element of the array
// Returns removed element
const removedFruitUsingPop = fruitsPop.pop();

// Logs ['Apple', 'Banana', 'Cherry']
console.log("After using Pop method: " + fruitsPop);

// Logs Orange
console.log("Returning Pop'ed element: " + removedFruitUsingPop);

/*----------------------------------------------------------------------------------------------------------------------------------------------------------------- */

// Shift method
const fruitsShift = ["Apple", "Banana", "Cherry", "Orange"];

// Removs the first element of the array
// Returns removed element
const removedFruitUsingShift = fruitsShift.shift();

// Logs ["Banana", "Cherry", "Orange"]
console.log("After using Shift method: " + fruitsShift);

// Logs Apple
console.log("Returning Shift'ed element: " + removedFruitUsingShift)

/*----------------------------------------------------------------------------------------------------------------------------------------------------------------- */

// Unshift method
const fruitsUnshift = ["Apple", "Banana", "Cherry", "Orange"];

// Adds one or more elements at the beginning of the array
// Returns new length
fruitsUnshift.unshift("Extra fruit 1", "Extra fruit 2");

// Logs ['Extra fruit 1', 'Extra fruit 2', 'Apple', 'Banana', 'Cherry', 'Orange']
console.log("After using Unshift method: " + fruitsUnshift);

/*----------------------------------------------------------------------------------------------------------------------------------------------------------------- */

// Splice method
const fruitsSplice = ["Apple", "Banana", "Cherry", "Orange"];

// Changes content of the array
// Removes, replaces, adds elements
fruitsSplice.splice(1, 1, "Replaced Fruit"); // Replaces the second element in the array

// Logs ['Apple', 'Replaced Fruit', 'Cherry', 'Orange']
console.log("After using Splice method: " + fruitsSplice);

/*----------------------------------------------------------------------------------------------------------------------------------------------------------------- */

// Concat method
const fruitsConcat1 = ["Apple", "Banana"];
const fruitsConcat2 = ["Cherry", "Orange"];

// Combines two or more arrays
//Doesn't modify the original array's
const combinedFruits = fruitsConcat1.concat(fruitsConcat2);

// Logs ['Apple', 'Banana', 'Cherry', 'Orange']
console.log("After using Concat method: " + combinedFruits);

/*----------------------------------------------------------------------------------------------------------------------------------------------------------------- */

// Slice method
const fruitsSlice = ["Apple", "Banana", "Cherry", "Orange"];

// Returns a copy of a portion of an array
// Doesn't modify the original array
const slicedFruits = fruitsSlice.slice(1, 3); // Creates a new array with elements from index 1 to 2 (not including index 3)

// Logs ['Banana', 'Cherry']
console.log("After using Slice method: " + slicedFruits);

/*----------------------------------------------------------------------------------------------------------------------------------------------------------------- */

// IndexOf method
const fruitsIndexOf = ["Apple", "Banana", "Cherry", "Orange"];

//Find the index of the specified element
// Returns first occurence of element
// Returns -1 if couldn't find element
const index = fruitsIndexOf.indexOf("Banana");

// Logs 1
console.log("The index of Banana is: " + index);

/*----------------------------------------------------------------------------------------------------------------------------------------------------------------- */

// Reverse method
const fruitsReverse = ["Apple", "Banana", "Cherry", "Orange"];

// Reverses the order of elements in the array
fruitsReverse.reverse();

// Logs ['Orange', 'Cherry', 'Banana', 'Apple']
console.log("After using Reverse method: " + fruitsReverse);

/*----------------------------------------------------------------------------------------------------------------------------------------------------------------- */

// Sort method
const fruitsSort = ["Cherry", "Orange", "Banana", "Apple"];
const fruitsSortNumbers = [4, 2, 8, 6, 1];

// Sorts elements in an array
// Returns sorted array
// Sorts elements as string by default
// Sorts numbers by providing a comparison function
fruitsSortNumbers.sort();
fruitsSort.sort();

// Logs [1, 2, 4, 6, 8]
console.log("After using Sort method: " + fruitsSortNumbers);

// Logs ['Apple', 'Banana', 'Cherry', 'Orange']
console.log("After using Sort method: " + fruitsSort);

/*----------------------------------------------------------------------------------------------------------------------------------------------------------------- */

// Length property
const fruitsLength = ["Cherry", "Orange", "Banana", "Apple"];

// Returns the number of elements
// Determines size and can resize the array

// Retreive length
const numFruits = fruitsLength.length;

// Logs 4
console.log("Using length property on fruitsLength array returns: " + numFruits);

// Expand array
fruitsLength.length = 6;

// Logs ['Cherry', 'Orange', 'Banana', 'Apple', empty × 2] or ['Cherry', 'Orange', 'Banana', 'Apple', undefined, undefined]
console.log("After expanding the length of the array: " + fruitsLength);

// Truncate array
fruitsLength.length = 2;

// Logs ['Cherry', 'Orange']
console.log(fruitsLength);
