// const grid = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// console.log(grid[0][2]);

// Nested loop structure where i iterates thru rows and the inner loop j iterates thru columns of the 2d array
// for (let i = 0; i < grid.length; i++){
//     for (let j = 0; j < grid[i].length; j++){
//         console.log(`Element at (${i}, ${j}) is: ${grid[i][j]}`);
//     }
// }

const theaterSeats = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["X", "O", "X"],
];

function bookSeat(row, col){
    if (theaterSeats[row][col] === "O"){
        theaterSeats[row][col] = "X";
        updateSeatStatus(row, col, "booked");
        alert(`Seat ${String.fromCharCode(65 + row)}${col + 1} is booked.`);
    } else {
        alert(`Seat ${String.fromCharCode(65 + row)}${col + 1} is already take.`)
    }
};

function updateSeatStatus(row, col, status){
    const seats = document.getElementsByClassName("seat");
    const index = row * 3 + col;
    seats[index].classList.remove("available", "booked");
    seats[index].classList.add(status);
};

function bookRandomSeats(){
    const availableSeats = [];

    for (let row = 0; row < theaterSeats.length; row++){
        for (let col = 0; col < theaterSeats[row].length; col++){
            if (theaterSeats[row][col] === "O"){
                availableSeats.push({row, col});
            }
        }
    }

    if (availableSeats.length > 0){
        const randomIndex = Math.floor(Math.random() * availableSeats.length);
         const {row, col} = availableSeats[randomIndex];
         bookSeat(row, col);
    } else {
        alert("All seats are already booked.");
    }
};