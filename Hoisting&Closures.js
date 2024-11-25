// Hoisting is the phenomina  in JS  because of which you can acees the variables or functions eveen before there initiialiizzation or declaration.
// Javascriipt is loosely typed language. that means wee can define any type to any variable ;
getName();
console.log("Histing variable ",a);
console.log(getName);
var a = 10;
const  cd ;

function getName (){
console.log("Namstey JS");
}

/* Example 2 :  */
course = " Namstey JS";
console.log("Hoisted Variable",course);
var course;

/* A variable that has been declared but not assigned a value is undefined but if a variable iis not decllared at all is known as not defined
 */

/* CLOSURES -  Closure is a combinatiion of function bundlled togethher with refrence to its llexxical enviornment. 

In simple language, if we have a function inside anoother function then the inneer function will have the access to all the variablees of the
outside funcction.
*/

function x() {
    let closureValue = 7;
    function y() {
        console.log(closureValue);
    }
    y();
}
x();


/* LEXICAL EENVIORNMENT */

function outerSccope(){
    var b =  10;
    function innerScope(){
        console.log("inner scope b",b);
    }
    innerScope();
}

outerSccope();
console.log("value of b after function execcuution completes",b);