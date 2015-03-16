function ABCheck(str) {
  var test = "" // empty string to store the boolean of the check
    for (var i = 0; i <= str.length; i++) { // for loop to loop through given string
        if (str[i] === "a") { // checks whether or not the character at [i] is "a"
            if (str[i-4] === "b" || str[i+4] === "b") { // if yes, checks to see if the letter three spaces away is "b" (for more knowledge of selecting a character, go here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr )
                test = true; // if yes, test will = true
            }
            else {
                test = false; // if no, test will = false
            }
        }
    }
        return test; // returns the result of the if/else statement
}

ABCheck(readline());           
