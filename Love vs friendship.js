/*
  Title:
    Love vs friendship
    
  Description:
    If　a = 1, b = 2, c = 3 ... z = 26

    Then l + o + v + e = 54

    and f + r + i + e + n + d + s + h + i + p = 108

    So friendship is twice as strong as love :-)

    Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

    The input will always be made of only lowercase letters and will never be empty.

*/
    
    
// Other Solution
/*
const wordsToMarks = (string) => {
    let count = 0
    let obj = {
      a:1,
      b:2,
      c:3,
      d:4,
      e:5,
      f:6,
      g:7,
      h:8,
      i:9,
      j:10,
      k:11,
      l:12,
      m:13,
      n:14,
      o:15,
      p:16,
      q:17,
      r:18,
      s:19,
      t:20,
      u:21,
      v:22,
      w:23,
      x:24,
      y:25,
      z:26
    }
    let countArr = string.split('').map((i) => count += obj[i])
    return countArr[countArr.length-1]
}
*/

// Now Solution
const wordsToMarks = (string) => {
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  return [...string].reduce((sum,letter)=> (sum += (alphabet.indexOf(letter) + 1),sum),0)
}