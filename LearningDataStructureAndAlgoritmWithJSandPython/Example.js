// sum up 1 + 2 + 3 + ... + n

function Sum1(n) {
    let sum = 0;
    for (let i=1; i<=n; i++) {
        sum += i;
    }
    return sum;
}

function Sum2(n) {
    return (n+1) * n /2;
}

RealEstate1 = 41 * 31000;
RealEstate2 = 71 * 23500;
RealEstate3 = 41 * 23500;
RealEstate4 = 166 * 26566;

TotalAmount = RealEstate1 + RealEstate2 + RealEstate3 + RealEstate4;

console.log(`Total Real Estate Amount: ${TotalAmount}`);
console.log(`Grandma: ${TotalAmount/2}`);
console.log(`Siblings: ${TotalAmount/8}`);

let arr = [1, 3, 5, 7, 9];
console.log(arr);

arr.push(11);
console.log(arr);

console.log(arr.pop());
console.log(arr);