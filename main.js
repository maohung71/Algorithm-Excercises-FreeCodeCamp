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
02A. Factoralize a number - Using Recursion
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

/*
03.  Palindrome - Word or sentence that's spelled the same way both forward and backward
***  using string replace method
*/

function palindrome(str){
  //regular expressions for matching everything not a numbers and alphabets
  var regEx = /[\W_]/g ;

  //replace space, punctuation with empty string
  var array = str.toLowerCase().replace(regEx, '');

  //reversing the array
  var strRev = array.split('').reverse().join('');

  return array === strRev;

}

console.log(palindrome("A man, a plan, a canal. Panama"));

/*
03A. Palindrome - Using Recurion
***  slice(1, 3) array method selects the elements starting at the given start
     argument, and ends at, but does not include, the given end argument.
*/

function palindroneRecursion(str){

  //replace with regular expression
  str = str.toLowerCase().replace(/[\W_]/g, '');

  if(str.length <= 1){
    return true;
  }else if(str[0] === str.slice(-1)){
    return palindroneRecursion(str.slice(1, -1));
  }else{
    return false;
  }
}

console.log(palindroneRecursion("radar"));


// 04. Find the Longest Word in a String

function findLongestWord(str){

  str = str.split(" ");
  var longest = 0;

  //console.log(str);

  for(var i = 0; i < str.length; i++){
    if(str[i].length > longest){
      longest = str[i].length;
    }
  }
   return longest;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));



function findLongest(str){

  str = str.split(" ");
  var longest = 0;

  //console.log(str);
  for(var i in str){
    if(str[i].length > longest){
      longest = str[i].length;
    }
  }
   return longest;
}

console.log(findLongest("The quick brown fox jumped over the lazy dog"));


