function Palindrome(str) { 
	var split = str.split(""); // splits the string into arrays so we can use .reverse()
	var reverse = split.reverse(); // reverses the arrays
	var message = reverse.join(""); // joins the arrays into a string
	
	if (str === message) { // if the original string is equal to the reversed string, return true
	    return true;
	}
	else {
	    return false; // if the original string is not equal to the reversed string, return false
	}
}

Palindrome(readline());
