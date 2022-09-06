const selectionSort = (a, updateBars) => {
  let changes = [];
  let arr = JSON.parse(JSON.stringify(a));
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
        changes.push([...arr]);
      }
    }

    let j = minIndex;
    while (j >= 0 && arr[j] < arr[j - 1]) {
      // Swap elements at j and j - 1
      const temp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = temp;
      changes.push([...arr]);
      j--;
    }

    // Swap elements at i and min
    // const minVal = arr[minIndex];
    // arr[minIndex] = arr[i];
    // arr[i] = minVal;
    // changes.push([...arr]);
  }
  updateBars(changes);
};

export default selectionSort;
