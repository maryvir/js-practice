// Write a JavaScript program to convert a given string into an array of words.

const strIntoArr = (string) => {
    return string.trim().split(" ");
};
console.log(strIntoArr("Mary Virabian"));


// Write a JS function to check whether the word is palindrome. 

function palindrome(str) {

    var len = str.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }

    return true;
}
console.log(palindrome('madam'));