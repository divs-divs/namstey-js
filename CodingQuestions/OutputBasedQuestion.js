// function x(){
//     var i = 1;
//     setTimeout(function (){
//       console.log(i);
//     },3000);
//     console.log("Learn ")
//   }
//   x();

function test() {
    for (let j = 1; j <= 10; j++) {
        setTimeout(() => { console.log(j) }, j * 1000)
    }
}

test()

function test1() {
    for (var k = 11; k <= 20; k++) {
        function check(k) {
            setTimeout(() => { console.log(k) }, k * 1000)
        }
        check(k)
    }
}

test1()

var a = 1;
function b() {
    a = 10; return;
    function a() { }
}
b();
console.log(a);

// output will be 1 because inside function b function a is hoisted and it will treat a as loccal and it iis cconverting function a into number 10 
// for more cclarification, see bellow explanation 

var a = 1;
function b() {  // Hoisted  
    function a() { }
    a = 10; return;
}
b();
console.log(a)

/////////////////////

function foo() {
    function bar() {
        return 3;
    }

    return bar();

    function bar() {
        return 8;
    }
}

alert(foo()); 

// output - 8 

//////////

function parent() {
    var hoisted = "I'm a variable";
    function hoisted() {
        return "I'm a function";
    }
    return hoisted();
}
console.log(parent());

// output - Typeerror hoisted is noot a function

////////

alert(
    foo());
function foo() {
    var bar = function () {
        return 3;
    };
    return bar();
    var bar = function () { return 8; };
}

// output - 3

///////

var myVar = 'foo';
(
    function () {
        console.log('Original value was: ' + myVar);
        var myVar = 'bar'; 
        console.log('New value is: ' + myVar);
    }
)();

// output - Original value was: undefined”, “New value is: bar

///////

var x = 1;
function foo() {
 x = 10;
 return;
 function x() {}
}
foo();
console.log(x);

var name = "Lokesh Prajapati";
(function() {
 console.log(name);
 var name = "Lokesh Prajapati";
})();

var x = 1;
if (function test() {}) {
 x += typeof test;
}
console.log(x);

function sayHelloWorld() {
    return sayGoodbyeWorld();
    var sayGoodbyeWorld = function() {
    return "Hello, World!";
    };
    function sayGoodbyeWorld() {
    return "Goodbye, World!";
    }
   }
   console.log(sayHelloWorld());

   var x = 10;
function testValue() {
    // var x = uundefinnned;
 console.log(x);
 var x = 20;
}
testValue();

console.log([] == ![]);

function sayHi() {
   // var hi = undefined;
    return hi;
    var hi = "Hello, World!";
   }

   var x = 5;
function outer() {
 var x = 10;
 function inner() {
 console.log(x);
 }
 return inner;
}

var finalResult = outer();
finalResult();

function userData() {
    return userData;
   }

   var x = 10;
function testNum() {
    // x -undefined
 console.log(x);
 if (true) {
 var x = 20;
 }
 console.log(x);
}
testNum();

var a = [1, 2, 3];
var b = [1, 2, 3];
console.log(a == b);


var x = 5;
(function() {
 console.log(x);
 var x = 10;
})();

function a() {
    console.log(this);
   }
   var b = {
    foo: a
   };
   b.foo();

   function foo() {
    console.log(a);
    let a = 10;
  }
  foo();

  //////////



  foo();
function foo() {
  console.log('Hello, world!');
}
var foo = function() {
  console.log('Goodbye, world!');
};
foo();

var x = 5;
function test() {
  console.log(x);
  var x = 10;
}

test();


for (let i = 0; i < 3; i++) {
    console.log(i);   //0,1,2
  }
  
  console.log(i);  //not defined

  if (true) {
    let message = "Hello!";
  }
  
  console.log(message); 


  var x = 10;

function test() {
  //var x = 20;
  console.log(x); // Which x is accessed here?
}

test();
console.log(x); 

const obj = { name: "Alice" };

obj.name = "Bob"; // Will this change the name property?

console.log(obj.name);


greet();

var greet = function() {
  console.log("Greetings!");
};


(function emp() {
    (function cust() {
      var a = 0;
      return (a = 1 + 4);
    })();
    a = 6;
    return a;
   })();


   function foo() {
    return "I'm the outer function";
   };
   function test() {
    console.log(bar); //undeinfed
    return foo(); // I'm the inner function
    var bar = "I'm a variable";
    function foo() {
      return "I'm the inner function";
    }
   }
   console.log(test());



   function parent() {
    var hoisted = "'I'm a variable";
    function hoisted() {
      return "I'm a function";
    }
    return hoisted();
  }
  console.log(parent());


  function parent() {
    return hoisted();
    var hoisted = "'I'm a variable";
    function hoisted() {
      return "I'm a function";
    }
  }
  console.log(parent());




  function parent() {
    var hoisted = "'I'm a variable";
    var hoisted  = function hoisted() {
      return "I'm a function";
    }
    return hoisted();
  }
  console.log(parent());



  function parent() {

    console.log("1", hoisted); // 1 undefined
    var hoisted = "I'm a variable";
    console.log("2", hoisted);  // 2 I m a variable
    function hoisted() {
      return "I'm a function";
    }
    console.log("3", hoisted);
  }
  parent();


  function example() {
    if (true) {
      var x = 10; 
    }
  
    console.log(x);
  }
  
  example();

  function example() {
    if (true) {
      let x = 10; 
    }
  
    console.log(x);
  }


  var name = "John";
function name() {
  return "I'm a function";
}
console.log(typeof name);
console.log(name()); 

console.log(a); //undefined
var a = 5;

function b() {
  return "I'm a function";
}

console.log(a);
console.log(b());