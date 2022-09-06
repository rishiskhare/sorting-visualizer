const bubbleSort = (a, updateBars) => {
  let changes = [];
  let arr = JSON.parse(JSON.stringify(a));
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = arr.length; j > i; j--) {
      if (arr[i] > arr[j]) {
        // Swap elements at i and j
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        changes.push([...arr]);
      }
      // updateBars(arr);
    }
  }
  updateBars(changes);
  // let arr = JSON.parse(JSON.stringify(a));
  // arr[0] = -5;
  // updateBars(arr);
  // arr[0] = -10;
  // updateBars(arr);
};

export default bubbleSort;
