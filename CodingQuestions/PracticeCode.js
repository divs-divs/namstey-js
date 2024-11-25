let getUserlist = fetch("https://fake-json-api.mock.beeceptor.com/users")
    .then((res) => { return res.json() })
    .then((data) => { return data })
    .catch((err) => console.log(err));

let getCompaniesList = fetch("https://fake-json-api.mock.beeceptor.com/companies")
    .then((res) => { return res.json() })
    .then((data) => { return data })
    .catch((err) => console.error(err))

/* Promise.all is a static method that takes iterables of promises as any input and returns the nnew promise and this reeturned promise
gets fulfileed when all the promises gets fullfiled and rejects when any of the promises gets reject 
*/

Promise.all([getUserlist, getCompaniesList])
    .then((res) => {
        console.log("UserLList ALL ----", res)
    })
    .catch((res) => {
        console.log("userListError ALL", res);
    })

/* Promise.any is a static method that takes iterables of prmises  as an input and returns the new promise  
and this returned promise get fullfieed when any of the prmises get fulllfiled and it gets rejected when all oof the promises
gets rejected.
*/

Promise.any([getUserlist, getCompaniesList])
    .then((res) => {
        console.log("UserLList ANY ---- ", res)
    })
    .catch((res) => {
        console.log("userListError ANY", res);
    })

/* Promise.allsettled is a static method that takes iterbales of promiises  as an input and returns a new promise
and  this returned promise gets settled when all of the promises gets settled
 */

let a = Promise.allSettled([getUserlist, getCompaniesList])
a.then((res) => {
    console.log("UserLList ALL SETTLED ---- ", res)
})
    .catch((res) => {
        console.log("userListError ALL SETTLED ---- ", res);
    })

/* Promise.race is a static  method thhat takkes iterable of promises and retuurns a new promiise
and this returned promise settles as soon as the any first promises settlled.
*/

Promise.race([getUserlist, getCompaniesList])
a.then((res) => {
    console.log("UserLList RACE ---- ", res)
})
    .catch((res) => {
        console.log("userListError RACE", res);
    })




// My question is if  I am  blocking the network ccall then why Promise.all is showing fulllfiled