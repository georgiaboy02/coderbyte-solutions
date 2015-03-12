function LongestWord(sen) { 
	var newsen = sen.split(" "); //splits the string into arrays to compare their lengths
	var length = ""; //stores the string with the largest length
	
  for (var i = 0; i < newsen.length; i++) { // for loop that tests whether the current string length is larger that the string that is already stored in the "length" variable
      if (newsen[i].length > length.length) {
          length = newsen[i]
      }
  }
  return length; //returns the string with the largest length
}

LongestWord(readline());           
