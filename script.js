 // ================= Part 1: Variable Declarations & Conditionals =================
let age = 20;
let isStudent = true;

if (age >= 18 && isStudent) {
    console.log("You are an adult student.");
} else if (age >= 18) {
    console.log("You are an adult but not a student.");
} else {
    console.log("You are a minor.");
}

// ================= Part 2: Custom Functions =================
function greet(name) {
    return `Hello, ${name}!`;
}

function sum(a, b) {
    return a + b;
}

// Test functions
console.log(greet("Alice"));
console.log("Sum of 5 + 10 =", sum(5, 10));

// ================= Part 3: Loop Examples =================

// Example 1: For loop
for (let i = 1; i <= 5; i++) {
    console.log(`For loop iteration: ${i}`);
}

// Example 2: While loop
let count = 1;
while (count <= 3) {
    console.log(`While loop count: ${count}`);
    count++;
}

// ================= Part 4: DOM Interactions =================

// 1. Change text content when button is clicked
const changeTextBtn = document.getElementById("change-text-btn");
const demoText = document.getElementById("demo-text");

changeTextBtn.addEventListener("click", () => {
    demoText.textContent = "Text has been updated by JavaScript!";
});

// 2. Update text using a function
const calculateBtn = document.getElementById("calculate-btn");
calculateBtn.addEventListener("click", () => {
    let total = sum(7, 13);
    demoText.textContent = `The sum of 7 + 13 is ${total}`;
});

// 3. Add items to a list dynamically
const fruitList = document.getElementById("fruit-list");
const fruits = ["Apple", "Banana", "Cherry"];

fruits.forEach(fruit => {
    const li = document.createElement("li");
    li.textContent = fruit;
    fruitList.appendChild(li);
});
