function WordCount(str) { 
  var split = str.split(" "); // splits the string into arrays
  return split.length; // returns the length of the array "split"
}

WordCount(readline());
