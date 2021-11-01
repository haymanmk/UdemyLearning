// Insertion sort algorithm

function InsertionSort(arr) {
    for (let i=1; i<=arr.length-1; i++) {
        let key = arr[i];
        let j=i-1;
        while ((j>=0) && (arr[j]>key)) {
            arr[j+1]=arr[j];
            j-=1;
        }
        arr[j+1]=key;
    }
    console.log(arr);
    //return arr;
}

let arr = [3,6,1,4,9,10, 0, 23, 3];

InsertionSort(arr);
