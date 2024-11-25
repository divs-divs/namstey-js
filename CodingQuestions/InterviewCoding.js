let arr = [2, 4, 5, 1, 6, 8, 3, 7, 5, 5, 10, 0]

//output like =  [ [2,8] , [5,5]...

const getSumAsTen = (arr) => {
    let itemAlreadyAdded = [];
    let requiredPair = [];
    let expectedOutput = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (!checkItemAlreadyUsed(arr[i], itemAlreadyAdded)) {
                if (checkSum(arr[i], arr[j], itemAlreadyAdded)) {
                    itemAlreadyAdded.push(arr[i]);
                    itemAlreadyAdded.push(arr[j]);
                    requiredPair.push(arr[i]);
                    requiredPair.push(arr[j]);
                    break;
                }

            }
        }
        expectedOutput.push(requiredPair);
        requiredPair = [];
    }
    return expectedOutput;
}

const checkItemAlreadyUsed = (element, arr) => {
    if (arr.includes(element)) {
        return true;
    }
    else {
        return false;
    }
}

const checkSum = (ele1, ele2, arr) => {
    if (!arr.includes(ele2)) {
        if (ele1 + ele2 === 10) {
            return true
        }
    }
    else {
        return false;
    }
}

console.log(getSumAsTen(arr));


// 2nd Approach 


function checkPair(arr) {
    let expectedArray = [];
    let arrPair = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 10) {
                arrPair.push(arr[i]);
                arrPair.push(arr[j]);
                arr.splice(j, 1);
                expectedArray.push(arrPair);
                arrPair = [];
            }
        }
    }
    return expectedArray;
}

console.log(checkPair(arr));