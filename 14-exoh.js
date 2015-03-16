function ExOh(str) { 
  xCount = 0; // variable to store the amount of "x" in str
  oCount = 0; // variavle to store the amount of "o" in str
  for (var i = 0; i <= str.length; i++) { // for loop to loop through the characters in str
      if (str[i] === "x") { // checks to see if str[i] is equal to "x"
          xCount += 1; // if yes, increase the amount of xCount by 1
      }
      else if (str[i] === "o") { // checks to see if str[i] is equal to "o"
          oCount += 1; // if yes, increase the amount of oCount by 1
      }
  }
  if (xCount === oCount) { // checks to see if the amount of "x" 's and the amount of "o" 's are equal
      return true; // if yes, return true
  }
  else {
      return false; // if no, return false
  }
}

ExOh(readline());
