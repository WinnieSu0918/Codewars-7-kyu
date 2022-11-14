/*
  Title:
    Odd or Even?
    
  Description:
    Task:
        Given a list of integers, determine whether the sum of its elements is odd or even.

        Give your answer as a string matching "odd" or "even".

        If the input array is empty consider it as: [0] (array with a zero).
    
  Examples:
    Input: [0]
    Output: "even"

    Input: [0, 1, 4]
    Output: "odd"

    Input: [0, -1, -5]
    Output: "even"
    
*/
    
    
// Other Solution
/*
const oddOrEven = (arr) => {
  if (!arr) return 'even'
  let total = 0
  if (arr.length === 1) total = arr[0]
  total = arr.reduce((a, b) => a + b, 0)
  return total % 2 ? 'odd' : 'even'
}
*/

// Now Solution
const oddOrEven = (arr) => arr.reduce((a, b)=> a + b ,0) % 2 ? 'odd' : 'even'