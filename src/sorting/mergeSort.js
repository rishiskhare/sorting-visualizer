let changes = [];

const mergeSort = (a, updateBars) => {
  changes = [];
  let arr = JSON.parse(JSON.stringify(a));
  mergeSortWithBounds(arr, 0, arr.length - 1);
  updateBars(changes);
};

const mergeSortWithBounds = (arr, left, right) => {
  if (left < right) {
    const mid = Math.floor((left + right) / 2);
    mergeSortWithBounds(arr, left, mid);
    mergeSortWithBounds(arr, mid + 1, right);
    merge(arr, left, mid, right);
  }
};

const merge = (arr, left, mid, right) => {
  const leftArrSize = mid - left + 1;
  const rightArrSize = right - mid;
  const leftHalf = arr.slice(left, mid + 1);
  const rightHalf = arr.slice(mid + 1, right + 1);
  let leftIndex = 0;
  let rightIndex = 0;
  let arrIndex = left;

  while (leftIndex < leftArrSize && rightIndex < rightArrSize) {
    if (leftHalf[leftIndex] < rightHalf[rightIndex]) {
      arr[arrIndex] = leftHalf[leftIndex];
      leftIndex++;
      // changes.push([...arr]);
    } else {
      arr[arrIndex] = rightHalf[rightIndex];
      rightIndex++;
      // changes.push([...arr]);
    }
    arrIndex++;
  }

  while (leftIndex < leftArrSize) {
    arr[arrIndex] = leftHalf[leftIndex];
    leftIndex++;
    arrIndex++;
    // changes.push([...arr]);
  }

  while (rightIndex < rightArrSize) {
    arr[arrIndex] = rightHalf[rightIndex];
    rightIndex++;
    arrIndex++;
    // changes.push([...arr]);
  }
  changes.push([...arr]);
};

export default mergeSort;
