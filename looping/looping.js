let limit = 50;
let a = 0;
let b = 1;

while(a <= limit){
    console.log(a);
    let temp = a + b;
    a = b;
    b = temp;
}

//Firs Iteration
// Logs a = 0
// temp = "0 + 1" = 1
// a = 1
// b = 1

//Second Iteration
// Logs a = 1
// temp = "1 + 1" = 2
// a = 1
// b = 2

//Third Iteration
//Logs a = 1
// temp = "1 + 2" = 3
// a = 2
// b = 3

//Fourth Iteration
// Logs 2
// temp = "2 + 3" = 5
// a = 3
// b = 5

let roll = 1;

do{
    console.log("Rooled a " + roll);
    roll++;
} while (roll < 7);