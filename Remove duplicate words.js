/*
  Title:
    Remove duplicate words
    
  Description:
    Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
    
  Examples:
    Input:
      'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

    Output:
      'alpha beta gamma delta'
    
*/

// Now Solution
const removeDuplicateWords = (s) => Array.from(new Set(s.split(' '))).join(' ')