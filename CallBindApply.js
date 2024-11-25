
/*
Call applly and bind are thhe buit in methods on every JS funcction, all these 3 methhds are used to maniipulate 
this keyword .
If i talk about calll and apply these mehtooods invokkeed immediately with the specified this kkeyword and individual arguments
Apply - serves sames purpose as ccall but iit acccepts the arguument in array  form
Bind- thhis  method does not invokked immediatleky it creates the cpy of  the function  and gets invokked at later point  of time
*/

let student = {
    firstName: "Divya",
    lastName: "Sharma",
}
let printDetails = function (address) {
    console.log(this.firstName + " " + this.lastName + " from " + address);
}
let student1 = {
    firstName: "Akshay",
    lastName: "Saini"
}
//Call Methods 

printDetails.call(student, "UP");
printDetails.call(student1, "Uttrakkhand");

//Apply Methods

printDetails.apply(student, ["UP"]);
printDetails.apply(student1, ["Uttrakkhand"]);

//Bind Method

let newFunction = printDetails.bind(student, "UP");
newFunction();

//Pollyfill for bind method 

Function.prototype.myBind = function (...args) {
    console.log("args", [...args]);
    let obj = this;
    return function () {
        obj.apply(args[0], args.splice(1));
    }
}

let newPolyfillBindFunction = printDetails.myBind(student, "UP");
newPolyfillBindFunction();


// Function currying using bind method

function multiply(x, y) {
    console.log("multiply", x * y);
}

let multipllyby2 = multiply.bind(this, 2);
multipllyby2(3);

// Function currying using closures

function multiplybyn(x) {
    return function (y) {
        console.log("multiply by closures", x * y);
    }
}

let multipllybyAny = multiplybyn(2);
multipllybyAny(3);