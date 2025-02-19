// This code does not execute properly. Try to figure out why.
// before
function multiply(a, b){
    return a * b
  }function multiply(a, b){
     return a * b
  }
//after
function multiply(a, b){
    return a * b
  };
console.log(multiply(3, 4)); 
console.log(multiply(5, 6));