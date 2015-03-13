function AlphabetSoup(str) {
    var message = str.split("") //splits the string into arrays
                  .sort("") //sorts the string by Unicode code points (search "array.prototype.sort" on MDN to get a super basic explanation. It helps)
                  .join(""); //joins the array together into a string
    
    return message; //returns the new message
                
}

AlphabetSoup(readline());
