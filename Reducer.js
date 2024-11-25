/*
Reduce method got its name from the functionality it is providing i.e it iterates the array values and reduce them to singlle one 
*/
let firstObject = [
    { 'category': 'fruit', 'name': 'Apple' },
    { 'category': 'vegetable', 'name': 'Potato' }
]

let secondObject = [
    { 'category': 'fruit', 'name': 'Grapes' },
    { 'category': 'vegetable', 'name': 'Tomato' }
]

let ab = [[1, 2], [3], [4, 5]];

let combinedObject = ab.reduce((acc, current) => { 
    console.log("rr",acc,current)
    acc = acc.concat(current) 
    return acc;
},[])

console.log("combinedObject", combinedObject);

let newCombinedObject = firstObject.reduce((acc,current)=>{

    if(Object.keys(acc).length === 0){
        let obj = {};
        for(key in current){
         obj[key]=[current[key]];
        }
        acc=obj
    }
    else{
        for(key in acc){
            for(key1 in current){
            if(key === key1){
                acc[key].push(current[key])
            }
            }
        }
    }

    return acc;

},{})

console.log("newCombinedObject", newCombinedObject);

let mda = [1,2,[3,4],[[5,6]],8,[4,[2,3]]]

let fa = mda.reduce((acc,current)=>{
    if(typeof(current)==="object"){
        acc = acc.concat(...current);
    }
    else{
        acc = acc.concat(current);
    }
    return acc;
},[])

console.log("fllat", fa);