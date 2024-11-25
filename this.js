/*
This refers to the object that the function is property of
The value of this keyword will always depend on the object that is invoking the function.
 */

/* This keywrs referes to the context where the piece of code is supposed to be run  
the value of this keyword depends on how the function is being invoked and not on how the function is being defined.
*/ 


// Global space

console.log("this keyword value in global space ",this);

// Functional Space
function x(){
    console.log("this keyword value in function space ",this);
}

x();

/* In case of useStrict method if we console the this keyword insiide the function then it will return undefined.
othherwise it return the global object because of (this substitution)
EXAMPLE

"Use Strict"
function x(){
    console.log("this keyword value in function space ",this);
}

x();

OUTPUT - undefined.

*/

//biinding of this in arrow funcctions

let obj1={
    name: function  (){
        console.log("Normal Function",this);
    }
}
let obj2={
    name: ()  => console.log("Arrow Function",this)
}

obj1.name();
obj2.name();

// this inside object's method 
 let student ={
    name:"Divya Sharma",
    printName: function (){
        console.log("this inside object method ", this)
    }
 }

 student.printName();

 // this inside nested arrow function

 let students = {
    name : "Divya Globallogic",
    printName:function(){
        let a =  function() {
            console.log("Inside nested funcction",this);
        }
        a();
        
    }
 }

students.printName();
