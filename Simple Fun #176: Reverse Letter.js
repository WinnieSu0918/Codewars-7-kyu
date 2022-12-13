/*
  Title:
    Simple Fun #176: Reverse Letter
    
  Description:
    Given a string str, reverse it and omit all non-alphabetic characters.

  Examples:
    For str = "krishan", the output should be "nahsirk".
    For str = "ultr53o?n", the output should be "nortlu".
    
  Notes:
    Input/Output
        [input] string str
    A string consists of lowercase latin letters, digits and symbols.
        [output] a string
*/

// Now Solution
const reverseLetter = (str) => str.match(/[a-z]/g).reverse().join('')