#!/usr/bin/env nodejs

var fs = require('fs');
var outfile = 'primes.txt';

function is_int(value){ 
    if ((parseFloat(value) == parseInt(value)) && !isNaN(value)) {
        return true;
    } else { 
        return false;
    } 
}

function is_prime(n) {
    // Check if the n is prime. 
    if (is_int(n) == false) {
       return false;
    }

    // Negative number till 1 are not primes.
    if (n <= 1) {
       return false;
    }

    // The number 2 should give positive result
    if (n == 2) {
       return true;
    }

    var divisor = 2;
    while (divisor * divisor < n) {
        if (n % divisor == 0) {
            return false;
        }
        divisor++;
    }
    
    // In this case we have hopped through all 
    // possibilities
    return true
}

a = 12
if (is_prime(a) == true) {
    console.log("the number " + a + " is a prime")
} else {
    console.log("the number " + a + " is not a prime.")
}
