let count = 0;

function resetCount() {
    count = 0;
    displayCount();
}

function increaseCount() {
    count++;
    displayCount();
    checkCountValue();
}

function displayCount() {
    document.getElementById("countDisplay").innerHTML = count;
}

function checkCountValue() {
    if (count === 10){
        alert("Your Instagram post gained 10 followers! Congrats!");
    } else if (count === 20) {
        alert("Your Instagram post gained 20 followers! Keep it up!");
    }
}

