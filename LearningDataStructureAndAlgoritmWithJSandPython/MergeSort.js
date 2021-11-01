let sortResult = MergeSort([3, 8, 0, 2, 1, 17, 4, -2, 111, 1]);

console.log(sortResult);

function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  // move rest of the components in array into the end of result.
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}
function MergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  } else {
    let middlePoint = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, middlePoint);
    let rightArr = arr.slice(middlePoint, arr.length);

    return merge(MergeSort(leftArr), MergeSort(rightArr));
  }
}
