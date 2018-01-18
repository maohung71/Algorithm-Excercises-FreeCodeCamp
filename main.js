/*
01. Reverse a String

*** split a string into an array of substrings, and returns the new array.
*** ("") is used as the separator, the string is split between each character.
*** The Split() method does not change the original string.

*** reverse() reverses the order of the elements in an array.

*** joins() the elements of an array into a string, and returns the string.
*** The elements will be separated by a specified separator (" "). The default separator is comma (,)
*/
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));


/*
02. Factoralize a number - using Reduce Method
*** Reduce Method is used to iterate through an array and condense it into one value
*/

function factoraial(num){
  var arr= [];

  for(var i = 1; i <= num; i++){
    arr.push(i);
  }
  //console.log(arr);
  var output = arr.reduce(function(a, b) {
    return a * b;
  });

  return output;
}

console.log(factoraial(5));


/*
2A. Factoralize a number - Using Recursion
*** when a function calls itself inside a function.
*/

function factorialRecursion(num){
  if (num == 0 || num == 1){
    return 1;
  }else{
    return num * factorialRecursion(num-1);
  }
}

console.log(factorialRecursion(5));






