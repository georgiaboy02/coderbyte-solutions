function SimpleSymbols(str) { 
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; //variable to test whether str[i] is a letter
    var test = true; //test to see whether or not the output is true
    for (var i = 0; i <= str.length; i++) {
        if (test.valueOf()=== true) { //tests to see if the value of test is true
            if (letters.indexOf(str[i]) != -1) { //tests to see whether or not str[i] is a letter
                if (str[i-1] === "+" && str[i+1] === "+") { //tests to see if the letter is surrounded by "+" in the string
                    test = true;
                }
                else {
                    test= false;
                }
            }
        }
        else {
            test = false;
        }
    }
  return test;  

}
SimpleSymbols(readline());        
