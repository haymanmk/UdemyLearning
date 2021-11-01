// Given two arrays and find the intersection between these two arrays
// i.e. A=[1,2,4,5,7]; B=[4,5,8,9]; the intersection elements are [4,5].

function Intersection(arr1,arr2) {
    let arr3 = arr1.concat(arr2);
    let coumter = {} //object
    let result = [];

    for (let i=0; i<arr3.length; i++) {
        if (!coumter[arr3[i]]) coumter[arr3[i]] = 1;
        else {
            //coumter[arr3[i]]++;
            result.push(arr3[i]);
        }
    }
    console.log(result);
}

Intersection([1,2,3,4,5,6,7,'a','c'], [5,6,7,8,9,'a']);