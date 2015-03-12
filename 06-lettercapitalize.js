function LetterCapitalize(str) { 
    var message = ""; //variable to store new message
    for (var i = 0; i < str.length; i++) {
        if (i === 0) { //if i equals zero it is the first letter of the string, so we can capitalize it
            message += str[i].toUpperCase();
        }
        else if (str[i-1] === " ") { //if [i-1] equals " " it will be the first letter of a word, so we can capitalize it
            message += str[i].toUpperCase();
        }
        else { //if i is not the first letter of a string and i-1 is not " " then it will not be the first letter in a word, so we can just add the letter to message
            message += str[i];
        }
    }
    return message
}
  // code goes here  
         
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCapitalize(readline()); 
