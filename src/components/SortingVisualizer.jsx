import React, { useState } from "react";
import { useEffect } from "react";
import bubbleSort from "../sorting/bubbleSort";
import './visuals.css';
import selectionSort from "../sorting/selectionSort";

const SortingVisualizer = () => {
  const [numItems, setNumItems] = useState(25);
  // const [delay, setDelay] = useState(500);
  let delay = 50;
  let maxVal = 100;
  const [i, seti] = useState(1);
  const [timeOuts, setTimeOuts] = useState([]);

  const generateDefaultArray = (items) => {
    const arr = [];
    for (let i = 0; i < items; i++) {
      arr.push(i);
    }
    maxVal = Math.max(...arr);
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
    });
    clearTimeout(timer);
    console.log("DONE!");
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
    <div className="daddy">
      <button className="btnn" onClick={() => setItemsArray(shuffleArray(itemsArray))}>
        Shuffle
      </button>
      <div className="barHolder">
        {itemsArray.map((item) => (
          <h1 style={{height: `${(item / maxVal) * 90 + 10}%`}} className="bar" key={item}>{item}</h1>
        ))}
      </div>
      <div className="btnnHolder">
        <button onClick={() => bubbleSort(itemsArray, updateBars)}>
          Bubble Sort
        </button>
        <button onClick={() => selectionSort(itemsArray, updateBars)}>
          Selection Sort
        </button>
      </div>   

    </div>
  );
};

export default SortingVisualizer;
