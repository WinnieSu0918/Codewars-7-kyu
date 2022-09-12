/*
  Title:
    Shortest Word
    
  Description:
    Simple, given a string of words, return the length of the shortest word(s).

    String will never be empty and you do not need to account for different data types.
    
*/
    
    
// Other Solution
/*
let findShort = (s) => {
  let min = s.split(' ').map((i) => i.length)
  return Math.min(...min)
}
*/

// Now Solution
let findShort = (s) => Math.min(...s.split(' ').map(i => i.length))