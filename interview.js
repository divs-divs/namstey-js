

let a = {name:"Diivya",ccourse:"react"}
let b = Object.create(a);
let c = { ... a};
let d = Object.assign({},a);

b["game"]="tennis";

a["name"]="Setu"

console.log(b);
console.log(a);
console.log(c);
console.log(d);