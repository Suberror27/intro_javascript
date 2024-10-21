function sum(a, b){
    let result = a + b;
    console.log("initializeSum function invokes sum function that logs the result of: " + result);
}

function initializeSum(a, b){
    // return sum(a, b);
    return a + b;
};

document.getElementById("resultDisplayed").innerHTML = initializeSum(1, 2);

