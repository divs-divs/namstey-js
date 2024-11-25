
/* A promise is an object thhat reprresnts the eventual completion or failure of an  asynchronous operation 
*/

// async function - async functions always returns the promise

// CASE 1 : when we return a value from async function
async function getData() {
    return "divya"
}
console.log("Async function", getData());

// CASE 2 : when we return a Promise from async function
let p = new Promise((resolve,reject)=>{
    return resolve("Promise value resolved")
})
async function getDataFromPromise() {
    return p;
}
let data = getDataFromPromise();
data.then((res)=>console.log(res))


/* why we need async await 
   1) async and await combo is used to handle promises
   2)Before async and await we were using .then() method to handle the proomises
   3)Await is a keyword that can be used only inside the async function.
*/
   
let promiseTemp = new Promise((resolve,reject)=>{
    resolve("Promise Resolved");
})

// 1 : Handling Promise before async await

function handlePromiseWithThen(){
    promiseTemp.then(res=>console.log("Without async await",res))
}

// 2 : Handling Promise with async await
async function handlePromiseWithAsyncAwait(){
    let val = await promiseTemp;
    console.log("With async await",val);
}

handlePromiseWithThen();
handlePromiseWithAsyncAwait();

// To check the functionality of async and await when we have 2 await in same function

let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("First Promise resolve");
    },1000)
})

let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Second Promise resolve");
    },5000)
})

async function handleTwoAwaitFunction(){
    let val1 = await p1;
    console.log("Namstey Javascript 1");
    console.log(val1);

    let val2 = await p2;
    console.log("Namstey Javascript 2");
    console.log(val2); 

}

handleTwoAwaitFunction();

let promise1 = new Promise((resolve,reject)=>{
    setTimeout((()=>{
        resolve("promise 1 successfully")
    }),1000)
})

let promise2 = new Promise((resolve,reject)=>{
    setTimeout((()=>{
        resolve("promise 2 successfully")
    }),2000)
})

let promise3 = new Promise((resolve,reject)=>{
    setTimeout((()=>{
        reject("promise 3 successfully")
    }),3000)
})

// PROMISE APIS

Promise.all([promise1,promise2,promise3]).then(res=>{
    console.log("PromiseAll",res);
}).catch((err)=>{
    console.error("error",err);
})

Promise.allSettled([promise1,promise2,promise3]).then(res=>{
    console.log("Promise All Settled",res);
}).catch((err)=>{
    console.error("error",err);
})

Promise.any([promise1,promise2,promise3]).then(res=>{
    console.log("Promise Any",res)
}).catch((err)=>{
    console.error("error",err)
})

Promise.race([promise1,promise2,promise3]).then((res)=>{
    console.log("Promise Race",res)
}).catch((err)=>{
    console.error("error-Promise Race : ",err)
})
