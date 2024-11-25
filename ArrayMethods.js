/**
Shallow copy - Shallow copy means only the first level off object will get copied, and all the nested levels will be refrennced
Deep Copy - Means allll the nested llevel off the object will be copied.

// Ways to create shallow copy  
1) spread operatoor
2)Object.assign({},soureceObj)
3)Object.create

// Ways to create ddeep copy  
1) JSON.strigigify and  JSON.parse
2)StructuredClone
3)Using Loadsh library like const deepCopy = _.cloneDeep(original);

//Object.freeze()
This method makes the objecct ccompletly immutable i.e we can neither add new properties or moodifie exxiiisiting pprooperties
BUT object.freeze methood soes not freez the  nnested levells

//Object.seall()
Thiis method allow modificatin in exisitin prooperties but des nt  alllow adddtion of mew  properties

Object.assign - > this method is used to assign the properties of source object into the target object and it also
 returnnss the targeted object.

 Object. creaate - > This methhod is uused to create the instancce of object with already declared objecct propertiess 
 and iits  prototype and it retuurn the empty object..


 *PROTOTYPAL INHERITENCE*

 protoypall Inhertience means, when an object can access the methods andd properties of their prototype.

 */


var removeDuplicates = function (nums) {
    // Length of the updated array
    let count = 0;
    // Loop for all the elements in the array
    for (let i = 0; i < nums.length; i++) {
        // If the current element is equal to the next element, we skip
        if (i < nums.length - 1 && nums[i] == nums[i + 1]) {
            continue;
        }
        console.log("count",count,"i",i);
        // We will update the array in place
        nums[count] = nums[i];
        console.log("num",nums);
        count++;
    }
    return count;
};

// console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));




