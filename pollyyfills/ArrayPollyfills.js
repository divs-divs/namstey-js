

/**
 Pollyfill for map 
 let arr1 = arr.map((item)=>item*2)
    - it iterates over the array
    - it returns new Array
 */
let arr = [1,2,3,4];
Array.prototype.myMap = function(callback){
    let tempArray = [];
    for(let i = 0 ; i<this.length;i++){
        console.log("callback",this[i],i,this);
        tempArray.push(callback(this[i],i,this))
    }
return tempArray;
}

let arr1 = arr.myMap((item)=>item*2);
console.log("arr1",arr1);

/**
 Pollyfill for filter 
 let arr1 = arr.filter((item)=>item<2)
    - it iterates over the array
    - it returns new Array
 */
    let arrFiilter = [1,2,3,4];

Array.prototype.myFilter = function(callback){
    let tempArray = [];
    for(let i = 0 ; i<this.length ; i ++){
        if(callback(this[i],i,this)){
       tempArray.push((this[i]))
        }
    }
    return tempArray
}

let arr1Filter = arr.myFilter((item)=>item<2);
console.log("arr1",arr1Filter);

/**
 Pollyfill for flat 
 let arr1 = arr.flat(depth)
    - it iterates over the array
    - it returns new Array
 */

let arrFlat = [1,2,3,4,[5,6]];

 //[1,2,3,4,5,6]

Array.prototype.flat = function(depth){
    return this.reduce((acc,current)=>{
        if(Array.isArray(current)&&depth>0){
            acc = acc.concat(current.flat(depth-1))
        }
        else{ acc = acc.concat(current)}
        return acc;
    },[])
}

let newArray = arrFlat.flat(1);
console.log(newArray);

/**
 Pollyfill for foreach 
 let arr1 = arr.forEach((item)=>{
return item
 })
    - it iterates over the array
 */

    let arrForEach = [1,2,3,4];

 Array.prototype.myForEach = function(callback){
    for(let i = 0 ; i<this.length ; i++){
        callback(this[i],i,this);
    }
 }

 arrForEach.myForEach((item)=>{
    console.log(item);
 })

 /**
 Pollyfill for Reduce 
 let arr1 = arr.reduce((acc,current)=>{
return item
 },[])
    - it iterates over the array
 */

let arrReduce = [1,2,3,4];

Array.prototype.myReduce = function(callback,initialValue){
    let acc = initialValue !== undefined ? initialValue : undefined;
    for(i=0;i<this.length;i++){
        if(acc !== undefined){
            acc = callback(acc,this[i],i,this) 
        }
        else{
            acc = this[i]
        }
    }
    return acc;
}

let arrReduce1 = arrReduce.myReduce((acc,current)=>{
    return acc = acc + current;
},0)

console.log(arrReduce1);


