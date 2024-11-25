/*
Currying is a mechhanism in JS , that allows the functions withh multiple argument to be transformed into sequence of the
nested functions.
 */

const sum = (a) => {
    return (b) => {
        return a + b;
    }
}

console.log(sum(1)(4))


const infiniteSum = (a) => {
    return (b) => {
        if(b) {
            return infiniteSum(a + b);
        }
        else {
            return a;
        }
    }

}

console.log(infiniteSum(1)(4)(2)(10)())