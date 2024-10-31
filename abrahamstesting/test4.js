function sendWelcomeEmail(email){
    // console.log(`Welcome email sent to ${email}`);
}

const users = [
    {name: "Alice", email: "alice@example.com"},
    {name: "Bob", email: "bob@example.com"},
    {name: "Charlie", email: "charlie@example.com"},
];

users.forEach((user) => {
    sendWelcomeEmail(user.email);
});

// ---------------------------------------------------------------------------------------------------------------------

const products = [
    {name: "Laptop", price: 1000},
    {name: "SmartPhone", price: 500},
    {name: "Tablet", price: 300},
];

products.map((product) => {
    // console.log(`The price of ${product.name} is ${product.price}`)
});

// ------------------------------------------------------------------------------------------------------------------------

const products2 = [
    {name: "Laptop", price: 1000},
    {name: "SmartPhone", price: 500},
    {name: "Tablet", price: 300},
    {name: "Monitor", price: 250},
    {name: "Keyboard", price: 50},
];

function filterProductsByPriceRange(productos, minPrice, maxPrice) {
    return productos.filter((product) => product.price >= minPrice && product.price <= maxPrice);
};

const minPrice = 100;
const maxPrice = 500;

const filteredProducts = filterProductsByPriceRange(products2, minPrice, maxPrice);
// console.log(filteredProducts);

filteredProducts.forEach((product) => {
    // console.log(`${product.name} is of $${product.price}`);
});

// ---------------------------------------------------------------------------------------------------------------------

const orderPrices = [50, 30, 25, 40, 15];

const totalOrderValue = orderPrices.reduce((total, price) => total + price, 0);
console.log(totalOrderValue);

// ---------------------------------------------------------------------------------------------------------------------------

const employees = [
    {id: 1, name: "Alice", Eid: "EMP001", "Contact details": "alice@example.com", Role: "Manager", Designation: "Project Manager", Experience: "5 years"},
    {id: 2, name: "Bob", Eid: "EMP002", "Contact details": "bob@example.com", Role: "Engineer", Designation: "Software Engineer", Experience: "3 years"},
    {id: 3, name: "Charlie", Eid: "EMP003", "Contact details": "charlie@example.com", Role: "Analyst", Designation: "Data Analyst", Experience: "2 years"},
];

const employee  = employees.find((e) => e.id === 2);

console.log(`Details of the employee\nname: ${employee.name}\nEid: ${employee.Eid}\nContact details: ${employee['Contact details']}\nRole: ${employee.Role}\nDesignation: ${employee.Designation}\nExperience: ${employee.Experience}`);