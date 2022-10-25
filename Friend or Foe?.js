/*
  Title:
    Friend or Foe?
    
  Description:
    Make a program that filters a list of strings and returns a list with only your friends name in it.

    If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

    Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"] i.e.
    
  Examples:
    friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
    
  Notes:
    keep the original order of the names in the output.
*/

// Now Solution
let friend = friends => friends.filter((item) => item.length === 4)