import React, { useState } from "react";
import { useEffect } from "react";
import bubbleSort from "../sorting/bubbleSort";
import selectionSort from "../sorting/selectionSort";
import insertionSort from "../sorting/selectionSort";

const SortingVisualizer = () => {
  const [numItems, setNumItems] = useState(25);
  // const [delay, setDelay] = useState(500);
  let delay = 200;
  const [i, seti] = useState(1);
  const [timeOuts, setTimeOuts] = useState([]);

  const generateDefaultArray = (items) => {
    const arr = [];
    for (let i = 0; i < items; i++) {
      arr.push(i);
    }
    return arr;
  };

  const [itemsArray, setItemsArray] = useState(generateDefaultArray(numItems));

  const updateBars = (items) => {
    // console.log(delay * i);
    console.log("UPDATING BARS");
    let i = 0;
    const timer = (arr) =>
      setTimeout(() => {
        setItemsArray(arr);
        console.log("CHANGE");
      }, delay * i);
    items.forEach((arr) => {
      timer(arr);
      i++;
      // timer();
    });
    clearTimeout(timer);
    console.log("DONE!");
    // setTimeOuts([
    //   ...timeOuts,
    //   setTimeout(() => {
    //     setItemsArray(items);
    //   }, delay * i),
    // ]);
    // seti(i + 1);
  };

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
      <button onClick={() => bubbleSort(itemsArray, updateBars)}>
        Bubble Sort
      </button>
      <button onClick={() => selectionSort(itemsArray, updateBars)}>
        Selection Sort
      </button>
      <button onClick={() => insertionSort(itemsArray, updateBars)}>
        Insertion Sort
      </button>
    </div>
  );
};

export default SortingVisualizer;
