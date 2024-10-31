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