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

// Function that checks whether the input value is a prime
function is_prime(n) {
    // Check whether n is integer>1
    if (is_int(n) == false || n <=  1) {
       return false;
    }

    // The number 2 should give positive result
    if (n == 2) {
       return true;
    }

    var divisor = 2;
    while (divisor * divisor <= n) {
        if (n % divisor == 0) {
            return false;
        }
        divisor++;
    }
   
    // No divisions were possible, prime
    return true
}

// Function that outputs a the first m primes (with m the argument
// of the function
function first_primes(m) {
    var primes = new Array();
    var n = 1;
    var collected = 0;
    while (collected<m) {
        if (is_prime(n)) {
            primes[collected] = n;
            collected++;
        }
        n++;
    }
    return primes
}

// Function to convert object to comma separated string
function array2string(arr) {
    if (arr.length < 1) {
        return '';
    }
    var out_string = arr[0] + ''
    for (var n=1; n < arr.length; n++) {
        out_string += ',' + arr[n];
    }
    return out_string
}

var out_primes = array2string(first_primes(100));
console.log(out_primes)

