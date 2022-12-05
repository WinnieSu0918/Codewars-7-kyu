/*
  Title:
    Fizz Buzz
    
  Description:
    Return an array containing the numbers from 1 to N, where N is the parametered value.

    Replace certain values however if any of the following conditions are met:

    If the value is a multiple of 3: use the value "Fizz" instead
    If the value is a multiple of 5: use the value "Buzz" instead
    If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
    N will never be less than 1.
    
  Examples:
    fizzbuzz(3) -->  [1, 2, "Fizz"]
    
*/
    
    
// Other Solution
/*
const fizzbuzz = (n) => {
  const arr = Array.from({length: n}, (v, i) => i + 1)
  return arr.map((item) => {
    if (item % 3 === 0 && item % 5 === 0) {
      return 'FizzBuzz'
    } else if (item % 3 === 0) {
      return 'Fizz'
    } else if (item % 5 === 0) {
      return 'Buzz'
    } else {
      return item
    }
  })
}
*/

// Now Solution
const fizzbuzz = (n) => {
    let arr = []
    for (let i = n; i > 0; i--) {
      i % 3 === 0 && i % 5 === 0 ? arr.unshift('FizzBuzz') :
      i % 3 === 0 ? arr.unshift('Fizz') :
      i % 5 === 0 ? arr.unshift('Buzz') : arr.unshift(i)
    }
    return arr
}

