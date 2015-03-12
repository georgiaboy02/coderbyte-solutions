function LetterChanges(str) { 
 var vowels = ["a", "e", "i","o","u"]; //array to test vowels
 var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];//array to find the letter after str[i]
 var message= "";//variable to store returned message
 for (var i = 0; i < str.length; i++) { //for loop to go through each letter in the original string
   var value = letters.indexOf(str[i]); //finds the index of str[i] in letters array
   if (value != -1) { //tests whether or not str[i] is in the letters array, this tests to see whether or not str[i] is actually a letter
       if (vowels.indexOf(letters[value + 1]) != -1) { //tests whether or not the letter afer str[i] is a vowel
           message += letters[value +1].toUpperCase(); //if the letter after str[i] is a vowel this capitalizes the letter
       }
       else { //if the letter is not a vowel the letter will be added to the message variable
           message += (letters[value +1])
       }
   }
   else { //if str[i] is not a letter, the value at str[i] will be added to the message variable
       message += str[i];
   }
 }
return message; //returns the new message
}

LetterChanges(readline());           
