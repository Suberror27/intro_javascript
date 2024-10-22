const input = document.getElementById("myInput");
const output = document.getElementById("output");

// input.onkeydown = function(event) {
//     output.textContent = `Key pressed: ${event.key}`;
// };

input.onchange = function() {
    output.textContent = `Value changed to: ${input.value}`;
};