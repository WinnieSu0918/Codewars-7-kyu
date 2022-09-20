/*
  Title:
    Number of People in the Bus
    
  Description:
    There is a bus moving in the city, and it takes and drop some people in each bus stop.

    You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

    Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

    Take a look on the test cases.

    Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

    The second value in the first integer array is 0, since the bus is empty in the first bus stop.
    
*/

// Other Solution
/*
let number = (busStops) => {
  let odd = 0;
  let even = 0;
  busStops.map((i) => {
    if (i.length < 2) return;
    i.map((j, index) => (index ? (even += Number(j)) : (odd += Number(j))));
  });
  return odd - even;
};
*/

// Now Solution
const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0)
