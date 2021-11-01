let result = [];

Permutation(["A", "B", "C", "D"], 0);
console.log(result);

function Permutation(arr, start) {
  if (start >= arr.length) {
    result.push([...arr]);
    // console.log(arr);
  } else {
    for (let i = start; i < arr.length; i++) {
      Swap(arr, start, i);
      Permutation(arr, start + 1);
      Swap(arr, i, start);
      // console.log(arr);
    }
  }
}

function Swap(arr, index_1, index_2) {
  let temp = arr[index_1];
  arr[index_1] = arr[index_2];
  arr[index_2] = temp;
}
