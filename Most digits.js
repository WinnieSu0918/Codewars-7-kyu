/*
  Title:
    Most digits
    
  Description:
    Find the number with the most digits.

  If two numbers in the argument array have the same number of digits, return the first one in the array.
    
*/

// Now Solution
const findLongest = (array) =>
  array.reduce((a, b) => (b.toString().length > a.toString().length ? b : a));
