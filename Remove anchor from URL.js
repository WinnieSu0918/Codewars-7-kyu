/*
  Title:
    Remove anchor from URL
    
  Description:
    Complete the function/method so that it returns the url with anything after the anchor (#) removed.
    
  Examples:
    "www.codewars.com#about" --> "www.codewars.com"
    "www.codewars.com?page=1" -->"www.codewars.com?page=1"
    
*/

// Other Solution
/*
const removeUrlAnchor = (url) => url.replace(/([^#]*)#.+/, '$1'
*/

// Other Solution2
/* 切文字 [ 'www.codewars.com', 'about' ] 取 [0]
const removeUrlAnchor = (url) => url.split('#')[0]
*/

// Now Solution
const removeUrlAnchor = (url) => url.replace(/\#.*/g, '')