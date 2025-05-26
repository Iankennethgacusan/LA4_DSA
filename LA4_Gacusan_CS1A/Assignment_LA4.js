let queue = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

console.log("Current Queue:", queue);

// Ask the user to enter their name and join the end of the queue
let name = prompt("Please enter your name:");
queue.push(name);
alert("Welcome, " + name + "! You are number " + (queue.indexOf(name) + 1) + " in line.");

console.log("Queue After Joining:", queue);

// Ask which number in the queue will be served next
let num = parseInt(prompt("Enter the queue number to be served:"));

if (num > 0 && num <= queue.length) {
  alert("Now serving customer: " + queue[num - 1]);
  queue.splice(num - 1, 1); // Remove the served customer from the queue
  console.log("Queue After Service:", queue);
} else {
  alert("Sorry, that number is not valid.");
}
