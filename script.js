"use strict";

// 1)
// Create a function to calculate the sum of the two given integers. If the two values are the same, then returns the triple of their sum.

function ex1(int1, int2) {
  let sumResult = int1 + int2;
  if (int1 !== int2) {
    return sumResult;
  } else {
    sumResult * 3;
  }
}

// 2)
// Create a function to check two given numbers. Return true if one of the numbers is 50, or if their sum is 50.

function ex2(int3, int4) {
  let sumResult2 = int3 + int4;
  if (sumResult2 === 50 || int3 === 50 || int4 === 50) {
    return true;
  } else {
    return false;
  }
}

// 3)
// Create a function to remove a character at the specified position of a given string and return the new string.

function ex3(str, pos) {
  let newString = "Emilian";
  newString = newString.substring(pos);

  return newString;
}

// 4)
//  Create a function to find the largest of three given integers.

// 5)
// Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

// 6)
// Create a function that creates and returns the specified number of copies of a given string (positive number).

// 7)
// Create a function that returns the city name of a given string, if the string begins with "Los" or "New", otherwise returns blank.

// 8)
// Create a function to calculate the sum of three elements of a given array of integers of length 3.

// 9)
// Create a function to test whether an array of integers of length 2 contains 1 or a 3.

// 10)
// Create a function to test whether an array of integers of length 2 does not contain 1 or a 3

// 11)
// Create a function to find the longest string from a given array of strings.

// 12)
// Create a function to find the types of a given angle.

// Types of angles:
//     Acute angle: An angle between 0 and 90 degrees.
//     Right angle: An 90 degree angle.
//     Obtuse angle: An angle between 90 and 180 degrees.
//     Straight angle: A 180 degree angle.

// 13)
// Create a function to find the index of the greatest element of a given array of integers

// 14)
// Create a function to get the largest even number from an array of integers.

// 15)
// Create a function to check from two given integers, whether one is positive and another one is negative.

// 16)
// Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case.

// 17)
// Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

// 18)
// Create a function to convert a number to a string, the content of which depends on the number's factors. Follow next example:

// If the number has 3 as a factor, output 'Diego'.
// If the number has 5 as a factor, output 'Riccardo'.
// If the number has 7 as a factor, output 'Stefano'.
// If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
// Examples
// 28's factors are 1, 2, 4, 7, 14, 28.
// this would be a simple "Stefano".
// 30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
// this would be a "DiegoRiccardo".
// 34 has four factors: 1, 2, 17, and 34.
// this would be "34".

// 19)
// Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC
