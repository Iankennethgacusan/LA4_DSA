let customerTable = {};
let customers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

// Initialize customer table with numbered keys
for (let i = 0; i < customers.length; i++) {
  customerTable[i + 1] = customers[i];
}

console.log("Initial Customer Table:", customerTable);

// Get user input and assign a new number
let name = prompt("Enter your name:");
let newKey = Object.keys(customerTable).length + 1;
customerTable[newKey] = name;
alert("Welcome, " + name + "! Your assigned number is " + newKey);

console.log("Customer Table After Adding New Entry:", customerTable);

// Ask which customer number to serve
let num = parseInt(prompt("Enter a number to serve:"));

// Validate and process the service request
if (customerTable[num]) {
  alert("Serving customer: " + customerTable[num]);
  delete customerTable[num]; // Remove the served customer
  console.log("Customer Table After Service:", customerTable);
} else {
  alert("That number doesn't exist in the queue.");
}
