/*For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
Note: The function accepts an integer and returns an integer.

*/

function squareDigits(num){
    return parseInt(num.toString().split('').map(digit => Math.pow(Number(digit), 2)).join(''));
}
console.log(squareDigits(9119));  
console.log(squareDigits(765)); 

