/*
  Title:
    Credit Card Mask
    
  Description:
    Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

    Your task is to write a function maskify, which changes all but the last four characters into '#'.
    
  Examples:
    "4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

    // "What was the name of your first pet?"

    "Skippy" --> "##ippy"

    "Nananananananananananananananana Batman!"
    -->
    "####################################man!"
    
*/
    
    
// Other Solution
/*
let maskify = cc => {
  let str = cc.split('')
  return sumStr = str.map((item,index) => {
    if(str.length - index <= 4) {
      return item
    } else {
      return item = '#'
    }
  }).join('')
}
*/

// Now Solution
let maskify = cc => cc.slice(-4).padStart(cc.length,'#')