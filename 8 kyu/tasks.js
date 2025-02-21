/*Note: This kata is inspired by Convert a Number to a String!. Try that one too.
Description
We need a function that can transform a string into a number. What ways of achieving this do you know?
Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
Examples
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7*/
const stringToNumber = function(str){
    // put your code here
    return +str;
  }
 console.log(stringToNumber("1234"));  
console.log(stringToNumber("605"));   
console.log(stringToNumber("1405"));  
console.log(stringToNumber("-7"));  


/*Your task is to create a function that does four basic mathematical operations.
The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.
Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7*/
function basicOp(operation, value1, value2) {
  switch (operation) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      return value1 / value2;
    default:
      return "Invalid operation";
  }
}
console.log(basicOp('+', 4, 7));  
console.log(basicOp('-', 15, 18)); 
console.log(basicOp('*', 5, 5));   
console.log(basicOp('/', 49, 7));  


/*Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
It should look like this:
Sam Harris => S.H
patrick feeney => P.F*/
function abbrevName(name) {
  return name
    .split(' ') 
    .map(word => word[0].toUpperCase()) 
    .join('.'); 
}
console.log(abbrevName("Sam Harris"));  
console.log(abbrevName("patrick feeney"));

/*The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
Task
Given a year, return the century it is in.
Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
2742 --> 28*/
function century(year) {
  return Math.ceil(year / 100);
}
console.log(century(1705)); // Output: 18
console.log(century(1900)); // Output: 19
console.log(century(1601)); // Output: 17
console.log(century(2000)); // Output: 20
console.log(century(2742)); // Output: 28

/*Nathan loves cycling.
Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
For example:
time = 3 ----> litres = 1
time = 6.7---> litres = 3
time = 11.8--> litres = 5*/

function litres(time) {
  return Math.floor(time * 0.5);
}
console.log(litres(3));    
console.log(litres(6.7));  
console.log(litres(11.8)); 

/*Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
Example (Input => Output):
35231 => [1,3,2,5,3]
0     => [0]*/
function digitize(n) {
  return String(n).split('').map(Number).reverse();
}
console.log(digitize(35231)); 
console.log(digitize(0));   

/*Create a function that accepts a parameter representing a name and returns the message: "Hello, <name> how are you doing today?".
[Make sure you type the exact thing I wrote or the program may not execute properly]*/
function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}
console.log(greet("John")); 
console.log(greet("Alice"));


/*Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.*/
function lovefunc(flower1, flower2) {
  return (flower1 % 2 !== flower2 % 2);
}
console.log(lovefunc(4, 7)); 
console.log(lovefunc(2, 4)); 
console.log(lovefunc(5, 10)); 
console.log(lovefunc(6, 8));  

/*Make a simple function called greet that returns the most-famous "hello world!".
Style Points
Sure, this is about as easy as it gets. But how clever can you be to create the most creative "hello world" you can think of? What is a "hello world" solution you would want to show your friends?*/
function greet() {
  return ["Hello", "World"].join(", ") + "!";
}
console.log(greet())

function greet() {
  return "hello world!";
}
console.log(greet());


/*Can you find the needle in the haystack?
Write a function findNeedle() that takes an array full of junk but containing one "needle"
After your function finds the needle it should return a message (as a string) that says:
"found the needle at position " plus the index it found the needle, so:
Example(Input --> Output)
["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" */

function findNeedle(haystack) {
  const position = haystack.indexOf("needle"); 
  return `found the needle at position ${position}`;
}
console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])); 
