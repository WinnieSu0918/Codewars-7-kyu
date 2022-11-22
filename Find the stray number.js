/*
  Title:
    Find the stray number
    
  Description:
    You are given an odd-length array of integers, in which all of them are the same, except for one single number.

    Complete the method which accepts such an array, and returns that single different number.

    The input array will always be valid! (odd-length >= 3)
    
  Examples:
    [1, 1, 2] ==> 2
    [17, 17, 3, 17, 17, 17, 17] ==> 3
    
*/
    
    
// Other Solution
/*
const stray = (numbers) => {
  let sortArr = numbers.sort()
  if (sortArr[0] === sortArr[1]) {
    return sortArr[sortArr.length -1]
  } else {
    return sortArr[0]
  }
}
*/

// Now Solution
const stray = nums => nums.reduce((a, b) => a ^ b)