// Declare a global counter variable ---part--1

let counter = 0;

// Create a simple function that increments the variable, and then calls itself recursively

function measureStack() {
    counter++;
    measureStack();
}

// Surround the initial function call in a try/catch block.

try {
    measureStack();

} catch(error) {



// Within the catch, log the error and the value of the counter variable.

console.log("stack overflow");
console.log("maximum call stack size :counter");

}

// part--3
// cache the HTML element
const container = document.getElementById('prime');

// Write a function that takes a parameter n and adds a list of all prime numbers between one and n to your HTML element
// function to check prime numbers

 function isprime(num) {
    if (num <= 1)
        return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0)
            return false;
    }
    return true;
 }

 // main function
  function generatePrime(num) {
    let current = 2;

    function processNext() {
        if (current <= num) {
         // check if the number is prime
         if (isPrime(current)) {   
            container.textcontent += current + '';
         }
        current++;
    // going back to loop 
    setTimeout(processNext, 0);    
    } else {

    // calling alert method
      alert('calculation is finished');
    }
 }

 // start the loop
   processNext();
}

   generatePrime(10000);

  
