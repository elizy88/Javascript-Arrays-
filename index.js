// You need to fork this repl.it and then will turn in the link in your browser as your homework assignment once you are done answering the following questions.

// TESTING you should be able to test your answers by clicking into Shell on the right and typing 'npm test'.

// DEBUGGING type console.log('any string here', varName) to console log values to see your answers before you run test.


// QUESTION 1: Write a function that takes one Array parameter and returns true if the parameter is empty, false if not

/**
 * Checks if an array is empty
 * @param {array}
 * @returns {boolean}
 */
function isEmpty(array) {
  let arr = [];
 
    if (arr.length===0){
      return true;
    
    }else {
      return false;
    }
  }
isEmpty([2]);


// QUESTION 2: Write a function that takes one Array parameter and one Number parameter and returns the element in the array at the given number index, null if it doesn't exist

/**
 * Finds the element in array at a given index
 * @param {array}
 * @param {number}
 * @returns {(string|number|null)}
 */
function getElementAt(arr,index) {
  
if ( index < 0 || index >= arr.length){
  return null;
} else {
return arr[index];
}
}
console.log('index of num' ,getElementAt([2,5,6],4));

// QUESTION 3: Write a function that takes one Array parameter, inserts the value `0` at the second index, and returns the new Array

/**
 * Inserts zero value at the second index in an array
 * @param {array}
 * @returns {array}
 */
function insertZeroInArray(para) {
       para[1] = 0;

      return para;
}
console.log(insertZeroInArray([6,9,5,7]));


// QUESTION 4: Write a function that takes two Array parameters (containing numbers or strings only) and returns true if they are equal, false if not

// HINT: In JavaScript, 1 === '1' is false, but 1 == '1' is true. You'll need to use the triple equals operator which is more strict because it compares data type.

/**
 * Checks if two arrays are equal
 * @param {array}
 * @param {array}
 * @returns {boolean}
 */
function isEqual(arr1,arr2) {
  
 if (arr1 === arr2) return true;
  if (arr1.length !== arr2.length) return false;
  for (var i = 0; i < arr1.length; ++i) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}


// QUESTION 5: Write a function that takes one Array parameter and returns the sum of all the Array elements
// BONUS: use the `reduce()` method

/**
 * Finds the sum of all elements in an array
 * @param {array}
 * @returns {number}
 */
const calculateArraySum = (arr) => {
  
  const sum = arr.reduce((total,value)=> total + value);
  return sum;
}
  console.log('the sum of all array' ,calculateArraySum([1,5,9,4]));



// QUESTION 6: Write a function that takes one Array parameter and returns a new Array of all the even numbers
// BONUS: use the `filter()` method

/**
 * Find all even numbers in an array
 * @param {array}
 * @returns {array}
 */
const findEvenNumbers = (array) => {
  
 let  evenNumber = array.filter(array => (array % 2== 0));
 console.log('even numbers' ,evenNumber);
 return evenNumber;
}
findEvenNumbers([12,4,8,63,18]);

// QUESTION 7: Write a function that takes one Array parameter and returns a new Array of all the odd numbers
// BONUS: use the `filter()` method

/**
 * Find all odd numbers in an array
 * @param {array}
 * @returns {array}
 */
const findOddNumbers = (array) => {
  let oddNumbers = array.filter( array => !(array % 2 == 0));
  console.log('odd numbers',oddNumbers);
return oddNumbers;
}
findOddNumbers([45,22,31,23,42]);

// QUESTION 8: Write a function that takes one Array parameter and returns a new Array with the squared values of each of the numbers
// EXAMPLE: The squared value of 4 is 4^2 = 4 * 4 = 16
// BONUS: use `map()` method

/**
 * Squares all the numbers in an array
 * @param {array}
 * @returns {array}
 */
const squareNumbers = (array) => {
const newArray = array.map(array=>(array*array))
console.log(newArray);
return newArray;
}
squareNumbers([4,2,3,6]);


// DO NOT EDIT BELOW THIS LINE
module.exports = {
  isEmpty,
  getElementAt,
  insertZeroInArray,
  isEqual,
  calculateArraySum,
  findEvenNumbers,
  findOddNumbers,
  squareNumbers,
}
