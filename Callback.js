/*
Callback are the functions  that are passed as parameteer in another function 
but because of calllback we face following 2 issues
  1)Callback hell
  2)Inversion of control - we lost the control of our function, because we have passeed it
  to another function and we dont kknow that when that function will gets excceuuted
  or it ever get executed or not or what if it gets executed twice.
*/

function printSum(sum) {
 return sum
}

function sum(num1,num2,getSum){
    let sum = num1 + num2;
   return  getSum(sum);
}

console.log("sum of 2 numbers", sum(5,5,printSum))

/* in liine number 19 - 5,5,printSum are arguments and in liine number 14 : num1,
num2 and getSum are parameters
*/