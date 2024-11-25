let a = {'name':'divya'}


Object.prototype.myAssign = function(targetObject, ...sourceObject){
    let ab = sourceObject;
    ab.forEach((source)=>{
        for(key in source){
            targetObject[key] = source[key]
        }
    })
    return targetObject;
}

let b = Object.myAssign({},a)
console.log(b);

/**
 let b = Object.create(a);
 let b = {};
 */

 Object.prototype.myCreate = function(sourceObject){
    let targetObject = {};
        targetObject.prototype = sourceObject
    return targetObject;
 }

 let bc = Object.myCreate(a)
console.log(bc);