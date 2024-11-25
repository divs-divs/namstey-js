
let a = [["a","1"],"b","c","d"];
let c =a.slice(-1,2);
console.log("original array",a);
console.log("extracted  Result",c);
(function(){
    console.log(this);
})()

//cclosure examplle

function ad(){
    let obj={name:'divya'}
    return function c(){
        console.log(obj.name + "is awesome");
    }
}

let cd = ad();
cd();

//biinding of this in arrow funcctions

let obj1={
    name: function  (){
        console.log(this);
    }
}
let obj2={
    name: ()  => console.log(this)
    
}

obj1.name();
obj2.name();

//checking the setTimeout 

for(var i = 0; i<3;i++){
    setTimeout(()=>{console.log("value  of i ",i)},3000);
}

for(let i = 0; i<3;i++){
    setTimeout(()=>{console.log("value  of i ",i)},3000);
}

//checking array - Pass by refrence
const arr = [1,2,3,4,5,6];
const temp = [...arr];
temp.push(7);
console.log("original",arr);
console.log("teemp",temp);

//checking object - Pass by refrence - it is allowing us to cchange because we are changing the values nt the address they are pointing to
const obj = {name:"divya",age:25};
const objTemp={name:"setu"};
obj.name=objTemp.name;
obj.name="sharma";
console.log("original",obj);


//spread operator 
let tempString= "hello divya sharma";
let aaa = {...tempString};
console.log(aaa,typeof(aaa));
 
//rest operatr
const restFunc=(a,b,...rest)=>{
    console.log("rest",rest);
}
restFunc(1,2,3,4,5,6);

//filter functioon
let filterArray = [1,2,3,4,5,6];
let newArr = filterArray.filter(a=>a>3)
console.log("filterArray",filterArray);
console.log("newArr",newArr);


//uunique values frm array

let uniqueArr = [1,1,2,3,3,4,5];
console.log("set",new Set(uniqueArr));


//map Methods
function checkMap(){
let myAwesomeArray = [5, 4, 3, 2, 1]
 return myAwesomeArray.map(x => x * x)
}
console.log("myAwesomeArray",checkMap());

//ForEach Method
function checkForEach(){
const myAwesomeArray1 = [
    { id: 1, name: "john" },
    { id: 2, name: "Ali" },
    { id: 3, name: "Mass" },
  ]
  
   return myAwesomeArray1.forEach(element => console.log(element.name))
}
  console.log("myAwesomeArray1",checkForEach());

  //sort method
  let sortArray = [3,78,62,100,5];
  sortArray.sort(function(a,b){return (a-b)})

  console.log("srtArray",sortArray);

