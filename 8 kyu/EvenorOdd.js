// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function evenOrOdd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';

}
console.log(evenOrOdd(10)); // "Even"
console.log(evenOrOdd(7));  // "Odd"
