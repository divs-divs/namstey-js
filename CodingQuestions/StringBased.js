// 1 - Reverse a string 

let str = "Hello my name is Divya Sharma";
let reverseString = str.split('').reverse().join('');

console.log("Reverse string",reverseString);

// 2 - This method mutates the original array as well.

let a = [1,2,3,4,5];
let b = a.reverse();

console.log("Array",a,b);

// 3 - Pallindrome

let pallindromeString = "Hello my name is Divya Sharma";
let pallindromeReverseString = pallindromeString.split("").reverse().join("");
if(pallindromeString === pallindromeReverseString){
    console.log("String is pallindrome");
}
else{
    console.log("String is not pallindrome");
}

// 4 - Number of vowels in a string

let vowelsString = "Namstey Javascriipt";
let vowelCount = 0 ;
let vowels = "aeiouAEIOU";
for(let char of vowelsString){
if(vowels.includes(char)){
    vowelCount++;
}
}
console.log("Vowels count", vowelCount);

// 5- Longest word in a string

let longestWordinString = "Namstey Javascript is a great series";
let splitStringInArray = longestWordinString.split(" ");
let longestWord = "";
let longestWordLength = 0 ;
splitStringInArray.map((item,index)=>{
if(longestWordLength<item.length){
    longestWordLength = item.length;
    longestWord = item;
}
})
console.log("Longest word",longestWord);

// 6- Captialize the first letter of each word

let captializeLetter = "abaa ccdwq wqer hdjs";
let ab = "";
 captializeLetter.split(" ").map(item=>{
    ab = ab + " " + item.charAt(0).toUpperCase() + item.slice(1);
})

console.log("captializeLetter",ab);

// 7-  Repeat string number of times

const repeatString = (str,num) =>{
    if(num < 0) { return ""}
    else {
        return str.repeat(num);
    }
}

console.log("repeat string", repeatString("divya",4));

// 8   remove duplicates from string 

const removeDuplicate = (str) =>{
    return [...new Set(str)].join("");
}

console.log("N dupliicates",removeDuplicate("aaaaabbbcccdddeeee"))