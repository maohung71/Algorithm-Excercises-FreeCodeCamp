/*
01. Reverse a String

****split a string into an array of substrings, and returns the new array.
****("") is used as the separator, the string is split between each character.
****The Split() method does not change the original string.

****reverse() reverses the order of the elements in an array.

*** joins() the elements of an array into a string, and returns the string.
*** The elements will be separated by a specified separator (" "). The default separator is comma (,)
*/
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));


/*
02. Factoralize a number - using Reduce Method passed in a anon function as argument
****Reduce Method is used to iterate through an array and condense it into one value
*/

function factoraial(num){
  var arr= [];

  //loop throught the paranmeter number and push it into arr variable.
  for(var i = 1; i <= num; i++){
    arr.push(i);
  }

  //reduce will takes all the value from the loop and reduce to one value.
  var output = arr.reduce(function(a, b) {
    return a * b;
  });

  return output;
}

console.log(factoraial(5));


/*
02A. Factoralize a number - Using Recursion
****when a function calls itself inside a function.
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
****String.prototype.replace(regexp|substr, newSubstr|function) -method searches a string for a
     specified value, or a regular expression, and returns a new string where the specified values are replaced.
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
****String.prototype.slice(beginning value, after end value) array method selects the elements starting at the given start
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

/*
04. Find the Longest Word in a String
****String.prototype.split(separator, limit) -method is used to split a string into an array of substrings,
    and returns the new array.
    If an empty string ("") is used as the separator, the string is split between each character.
*/

function findLongestWord(str){

  //split string into array of words seperated by space
  str = str.split(" ");
  var longest = 0;

  for(var i = 0; i < str.length; i++){
    if(str[i].length > longest){
      longest = str[i].length;
    }
  }
  return longest;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

/*
04A. Find the Longest Word in a String
****forEach method takes argument
****.forEach(function(value, index, array){ }
*/

function findLongest(str){

  var longest = 0;
  //forEach array method
  str = str.split(" ").forEach(function(word){
    if (word.length > longest){
      longest = word.length;
    }
  })
   return longest;

}

console.log(findLongest("The quick brown fox jumped over the lazy dog"));

/*
05. Titlecase a sentence
*/

function titleCase(str){

  //break string into array and make all words into lowercase
  var arr = str.toLowerCase().split(" ");

  for(i in arr){
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  return arr.join(' ');
}

console.log(titleCase("I'm a little tea pot"));


/*
05A. Titlecase a sentence
**** utlizing Map Method
*/

function titleCaseMap(str){

  //break string into array
  var arr = str.split(" ");
  var mapped = arr.map(function(word){
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  })
  return mapped.join(' ');

}

console.log(titleCaseMap("I'm a little tea pot"));

/*
06. Return largest in a array
****basic solution with a forIn loop
*/

function largestOfFour(arr){
  var largestArray = [];

  for(i in arr){
    largestNum = 0;
    for(j in arr[i]){
      if(arr[i][j] > largestNum){
        largestNum = arr[i][j];
      }
    }
    largestArray.push(largestNum);
  }

  return largestArray;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));



/*
06A. Return largest in a array
**** with forEach loop
**** sort method - sort(function(a,b){ return  -b})
*/

function largestOfFourVer2(arr){
  var largestArray = [];

  arr.forEach(function(subArray){
      largestArray.push(subArray.sort(function(a, b){
        return b - a;
      })[0]);
  })
  return largestArray;
}

console.log(largestOfFourVer2([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

/*
07. Confirming the Ending
****String.prototype.substr(start, length) - Extracts parts of a string, beginning at the character
    at the specified position, and returns the specified number of characters.
****String.prototype.substring(start, indexEnd) - This method extracts the characters in a string between "start"
    and "end", not including "end" itself.
****String.prototype.endsWith(target)
*/

function confirmEnding(str, target){

  return arr = str.substr(-target.length) === target;

}

console.log(confirmEnding("Bastian", "n"));


/*08. Repeat a String
  ****Using Basic forLoop
*/

function repeatStringNumTimes(str, num){

  var output = [];
  for(var i=0; i<num; i++){
    output.push(str);
  }

  str = output.join('');
  return str;
}

console.log(repeatStringNumTimes("abc", 3));


/*08A. Repeat a String
  **** Using repeat method
*/

function repeatStringNumTimes2(str, num){

  return (num >= 1)? str.repeat(num) : '';
}

console.log(repeatStringNumTimes2("abc", 3));


/*
09. TruncateString- if it is longer than the given maximum string length (second argument).
    Return the truncated string with a ... ending.
*/

function truncateString(str, num){

  if(str.length <= num){
    return str;
  }else if(num <= 3){
    return str.slice(0, num).concat('...');
  }else {
    return str.slice(0, num-3).concat('...');
  }

  return str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));
console.log(truncateString("A-", 1));

/*
09A. TruncateString- if it is longer than the given maximum string length (second argument).
    Return the truncated string with a ... ending.
***Using ternary operator
*/

function truncateString2(str, num) {

  if(str.length > num)
    return str.slice(0, num>3 ? num-3 : num) + '...';

  return str;
}

console.log(truncateString2("A-tisket a-tasket A green and yellow basket", 11));
console.log(truncateString("A-", 1));

/*
10. Chunky monkey -Split an array (first argument) into groups the length of size (second argument)
    and returns them as a two-dimensional array.
*** with while loop
*/

function chunkArrayInGroups(arr, size){
  var newArr = [];
  var counter = 0;
  while(counter < arr.length){
    newArr.push(arr.slice(counter, counter + size));
    counter += size
  }
  return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d", "e"], 2));

/*
10A. Chunky monkey -Split an array (first argument) into groups the length of size (second argument)
     and returns them as a two-dimensional array.
*** with for loop
*/

function chunkArrayInGroups2(arr, size) {
  var newArr = [];
  var stop = size;

  for(var i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, stop));
    stop += size;

  }
  return newArr;
}

chunkArrayInGroups2(["a", "b", "c", "d"], 2);

/*
11.Slash Flick -Return the remaining elements of an array after chopping off n elements from the head.
*/

function slasher(arr, howMany){

  arr.splice(0, howMany);
  return arr;
}

console.log(slasher([1, 2, 3], 2));

/*
12. Mutation - Return true if the string in the first element of the array contains all
               of the letters of the string in the second element of the array.
*/

function mutation(arr){
  var first = arr[0].toLowerCase();
  var second = arr[1].toLowerCase();

  for (var i = 0; i< second.length; i++){
    if (first.indexOf(second[i]) < 0){
      return false;
    }
  }
  return true;
}

console.log(mutation(["hello", "hey"]));

/*
13. Falsy Bouncer - Remove all falsy values from an array.
*** filter method
*/

function bouncer(arr) {

  //returning array item if true
  return arr.filter(function(item){
    return item;
  });

}

console.log(bouncer([7, "ate", "", false, 9]));

/*
14. Seek and Destroy -You will be provided with an initial array (the first argument in the destroyer
    function), followed by one or more arguments. Remove all elements from the initial array that are of
    the same value as these arguments.
*** using filter(), Array.from() and includes() method
*/

function destroyer(arr){
  var args = Array.from(arguments).slice(1);
  return arr.filter(function(item){
    return !args.includes(item);
  })
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

/*
15. Where Do I Belong - Return the lowest index at which a value (second argument) should be inserted
    into an array (first argument) once it has been sorted. The returned value should be a number.
*** concat(), sort() and indexOf() method
*/


function getIndexToIns(arr, num){
  return arr.concat(num).sort(function(a, b){
    return a - b;
  }).indexOf(num);

}

console.log(getIndexToIns([40, 60], 50));


/*
15A. Where Do I Belong - Return the lowest index at which a value (second argument) should be inserted
    into an array (first argument) once it has been sorted. The returned value should be a number.
*/


/*
function getIndexToIns(arr, num){
  var number = [];
  for(var i = 0; i < arr.length; i++){
    if(arr[i] < num){
      number.push(arr[i]);
    }
  }
  return number.length;
}

console.log(getIndexToIns([40, 60], 50));
*/


/*
16. Caesars Cipher -  meanings of the letters are shifted by some set amount.
     ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
*** basic solution with for loops
*/

function rot13(str){

  //create array of alphabets
  var alphabets = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N',
                   'O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B',
                   'C','D','E','F','G','H','I','J','K','L','M','N'];

  var strToArray = str.split('');
  var rotString = [];

  //iterate throught strToArray and push /[_W]/g into array
  for(var i = 0; i < strToArray.length; i++){
    if(alphabets.indexOf(strToArray[i]) === -1){
      rotString.push(strToArray[i]);
    }else{

      //iterate throught alphabets array
      for(var j = 0; j < alphabets.length; j++){

        //if sting array matches alphabet array
        if(strToArray[i] === alphabets[j]){

          //push content to rotString + shift 13 spaces
          rotString.push(alphabets[j+13]);
        }
      }
    }
  }
  return rotString.join('');

}

console.log(rot13("SERR PBQR PNZC!"));

/*
16A. Caesars Cipher -  meanings of the letters are shifted by some set amount.
     ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
*** with map, charCodeAt, String.fromCharCode method
*/

function rot13A(str){

  var strToArray = str.split('');

  return strToArray.map(function(letter){

    //convert letter and convert to its' numerical value
    letter = letter.charCodeAt();

    //add 13 if letter is between A and M or subtract 13 if letter is between N to Z
    if(letter >= 65 && letter <= 77){
      letter += 13;
    }else if(letter >= 78 && letter <= 90){
      letter -= 13;
    }

    //take letter numerical value and create a new string integer
    return String.fromCharCode(letter);

    //switiching back from array to string
  }).join('');


}

console.log(rot13A("SERR PBQR PNZC"));









