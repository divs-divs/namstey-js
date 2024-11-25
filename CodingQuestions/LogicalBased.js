// Function to check PALLINDROME

//Method 1 : 
function checkPalindrome(str) {
    let tempString = str.split("").reverse().join("");
    if (tempString === str) {
        console.log("Yes Pallinndrome");
    }
    else {
        console.log("no Pallinndrome");
    }
}
//Method 2 : 
function checkPalindrome1(str) {
    let count = 0;
    for (let i = 0; i < (str.length / 2); i++) {
        let length1 = str.length - 1;

        if (str[i] === str[length1 - i]) {
            count = count + 1;
            console.log("count1")
            console.log("count", count)
        }
    }
    if (count === str.length / 2) {
        console.log("Yes Pallinndrome");
    }
    else {
        console.log("no Pallinndrome");
    }
}

console.log(checkPalindrome1("mwwwaam"));


/** ********************************************************************************************** */

// Function to check ANAGRAM

const checkAnagram = (str1, str2) => {
    let temp1 = str1.split("").sort().join("");
    let temp2 = str2.split("").sort().join("");
    console.log(temp1, temp2);
    if (temp1.length !== temp2.length) {
        return;
    }
    else {
        if (temp1 === temp2) {
            console.log("yes Anagram")
        }
        else {
            console.log("no Anagram")
        }
    }
}

checkAnagram('divya', 'viaya');

/** ********************************************************************************************** */

// Find Factorial

const getFactorial = (num) => {

    if (num === 0 || num === 1) {
        return 1
    }
    else {
        return num * getFactorial(num - 1)
    }
}

console.log(getFactorial(14));