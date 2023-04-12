/*
  Title:
    Summing a number's digits
    
  Description:
    Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.
    
  Examples:
    10 --> 1
    99 --> 18
    -32 --> 5
    
  Notes:
    Let's assume that all numbers in the input will be integer values.
    
*/

// Now Solution
const sumDigits = (number) =>
  Math.abs(number)
    .toString()
    .split("")
    .reduce((a, b) => Number(a) + Number(b), 0);
