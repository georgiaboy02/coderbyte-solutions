function ArithGeo(arr) { 
    if (arr[1] - arr[0] === arr[arr.length - 1] - arr[arr.length - 2]) { // checks to see if the second and first number have the same difference as the second to last number and the last number
        return "Arithmetic";
    }
    else if (arr[1] / arr[0] === arr[arr.length - 1] / arr[arr.length - 2]) { // checks to see if the quotient of the second and first number is the same as the quotient of the second to last and the last number
        return "Geometric";
    }
    else {
        return -1;
    }
}
ArithGeo(readline()); 
