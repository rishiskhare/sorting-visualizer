const insertionSort = (a, updateBars) => {
  let changes = [];
  let arr = JSON.parse(JSON.stringify(a));
  let key;
  for (let i = 1; i < arr.length; i++) {
    key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
    changes.push([...arr]);
  }
  updateBars(changes);
};

export default insertionSort;
