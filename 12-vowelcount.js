function VowelCount(str) { 
  vowelCount = 0; // variable to store number of vowels
  for (var i=0; i <=str.length; i++) // for loop to loop through all characters in str
  if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") { // tests to see if str[i] is a lowercase vowel
      vowelCount += 1; //if yes, increase the variable vowelCount by 1
  }
  else if (str[i] === "A" || str[i] === "E" || str[i] === "I" || str[i] === "O" || str[i] === "U") { // tests to see if str[i] is an uppercase vowel
      vowelCount += 1; //if yes, increase the variable vowelCount by 1
  }

  return vowelCount; // the number of variables, which are stored in vowelCount
         
}
VowelCount(readline());
