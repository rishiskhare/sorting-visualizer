const bubbleSort = (a, updateBars) => {
  let changes = [];
  let arr = JSON.parse(JSON.stringify(a));
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = arr.length - 1; j > i; j--) {
      if (arr[j] < arr[j - 1]) {
        // Swap elements at j and j - 1
        const temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        changes.push([...arr]);
      }
    }
  }
  updateBars(changes);
};

export default bubbleSort;
