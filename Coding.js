function reverseString (name1){
let temp = "";
let tempString = "";
for(let i = 0 ; i<name1.length-1;i++){
    if(name1.charAt(i)!==" "){
   
        tempString = tempString + name1.charAt(i);
    }
    else{
        console.log("here",tempString);
        for(let j =tempString.length-1 ;j<=0;j--){
            temp = temp.concat(tempString.charAt(j));
        }
        tempString="";  
    }
}
return temp;
}
let name1 = "My name is Divya!"
let output = reverseString(name1);

console.log("reverse",output);