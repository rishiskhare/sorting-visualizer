import React, { useState } from "react";

const SortingVisualizer = () => {
  const [numItems, setNumItems] = useState(100);

  const generateDefaultArray = (items) => {
    const arr = [];
    for (let i = 0; i < items; i++) {
      arr.push(i);
    }
    return arr;
  };

  const [itemsArray, setItemsArray] = useState(generateDefaultArray(numItems));

  const shuffleArray = (a) => {
    let arr = JSON.parse(JSON.stringify(a));
    for (let i = arr.length - 1; i >= 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      const temp = arr[i];
      arr[i] = arr[randomIndex];
      arr[randomIndex] = temp;
    }
    return arr;
  };

  return (
    <div>
      <button onClick={() => setItemsArray(shuffleArray(itemsArray))}>
        Shuffle
      </button>
      {itemsArray.map((item) => (
        <h1 key={item}>{item}</h1>
      ))}
    </div>
  );
};

export default SortingVisualizer;
