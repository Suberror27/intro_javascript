const breakfastMenu = ['Pancakes- $12', 'Eggs Benedict -$22.99', 'Oatmeal -$21.99', 'Frittata -$15'];

const breakFastMenuItems = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join("");

// console.log(breakFastMenuItems);

document.getElementById("breakfastMenuItems").innerHTML = breakFastMenuItems;