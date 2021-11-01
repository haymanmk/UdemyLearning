function MaxHeapify(arr, index, heapSize = arr.length) {
  /**
   * arr: array to heapify
   * index: index of node
   * heapSize: size of heap
   */
  let left = 2 * index + 1;
  let right = left + 1;
  let largest;

  if (left >= heapSize || heapSize <= 1) return;
  if (left < heapSize && arr[left] > arr[index]) {
    largest = left;
  } else {
    largest = index;
  }
  if (right < heapSize && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest != index) {
    // swap values of two variables
    arr[largest] = arr[largest] + arr[index];
    arr[index] = arr[largest] - arr[index];
    arr[largest] = arr[largest] - arr[index];

    // console.log(arr);

    // Heapify sub-heap
    MaxHeapify(arr, largest, heapSize);
  }
}

function Heapify(arr) {
  if (arr.length <= 1) return;

  let i = Math.floor(arr.length / 2);

  while (i >= 0) {
    MaxHeapify(arr, i);
    // console.log(arr);
    i--;
  }
}

function HeapSort(arr) {
  Heapify(arr);
  let heapSize = arr.length;

  while (heapSize >= 2) {
    // swap arr[0] with arr[heapSize-1]
    arr[heapSize - 1] = arr[heapSize - 1] + arr[0];
    arr[0] = arr[heapSize - 1] - arr[0];
    arr[heapSize - 1] = arr[heapSize - 1] - arr[0];

    heapSize = heapSize - 1;
    MaxHeapify(arr, 0, heapSize);
  }
}

let A = [];
let arrLength = 0;
for (let s = 0; s < Math.floor(Math.random() * 10); s++) {
  arrLength = arrLength + Math.pow(2, s);
}
for (let _i = 0; _i < arrLength; _i++) {
  A.push(Math.floor(Math.random() * 100));
}
// A = [10, 32, 23, 100, 2, 4, 5];
console.log("Original array: " + A);
console.log("Length of Array: " + A.length);

Heapify(A);

console.log("After heapify: " + A);

HeapSort(A);

console.log("After heap sort: " + A);
