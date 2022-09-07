let changes = [];

const quickSort = (a, updateBars) => {
  changes = [];
  let arr = [...a];
  quickSortWithBounds(arr, 0, arr.length - 1);
  updateBars(changes);
};

const quickSortWithBounds = (arr, left, right) => {
  if (left < right) {
    const medianIndex = partition(arr, left, right);
    quickSortWithBounds(arr, left, medianIndex - 1);
    quickSortWithBounds(arr, medianIndex + 1, right);
    changes.push([...arr]);
  }
};

const partition = (arr, left, right) => {
  const pivotIndex = Math.floor((left + right) / 2);
  const pivot = arr[pivotIndex];
  let i = left;
  let j = right;
  while (i < j) {
    while (arr[i] < pivot) {
      i++;
    }

    while (arr[j] > pivot) {
      j--;
    }

    if (i < j) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      changes.push([...arr]);
    }
  }

  return j;
};

export default quickSort;
