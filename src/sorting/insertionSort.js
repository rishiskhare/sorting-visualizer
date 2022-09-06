const insertionSort = (a, updateBars) => {
  let changes = [];
  let arr = JSON.parse(JSON.stringify(a));
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j >= 0 && arr[j] < arr[j - 1]) {
      // Swap elements at j and j - 1
      const temp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = temp;
      changes.push([...arr]);
      j--;
    }
  }
  updateBars(changes);
};

export default insertionSort;
