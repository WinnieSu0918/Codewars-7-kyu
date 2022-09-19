/*
  Title:
    Exes and Ohs
    
  Description:
    Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
    
  Examples:
    XO("ooxx") => true
    XO("xooxx") => false
    XO("ooxXm") => true
    XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
    XO("zzoo") => false
    
*/
    
    
// Other Solution
/*
let XO = (str) => {
  let x = 0
  let o = 0
  let arr = str.toLowerCase().split('').map((i) => {
    if(i === 'x') {
      x += 1
    } else if(i === 'o') {
      o += 1
    }
  })
  return x === o || false
}
*/

// Now Solution
let XO = (str) => str.toLowerCase().split('x').length === str.toLowerCase().split('o').length || false