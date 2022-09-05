const selectionSort = (a, updateBars) => {
  let changes = [];
  let arr = JSON.parse(JSON.stringify(a));
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // Swap elements at i and min
    const minVal = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = minVal;
    changes.push([...arr]);
  }
  updateBars(changes);
};

export default selectionSort;
