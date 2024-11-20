const grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// console.log(grid[0][2]);

// Nested loop structure where i iterates thru rows and the inner loop j iterates thru columns of the 2d array
for (let i = 0; i < grid.length; i++){
    for (let j = 0; j < grid[i].length; j++){
        console.log(`Element at (${i}, ${j}) is: ${grid[i][j]}`);
    }
}
