import React, { useState } from "react";
import { useEffect } from "react";
import "./visuals.css";
import bubbleSort from "../sorting/bubbleSort";
import selectionSort from "../sorting/selectionSort";
import insertionSort from "../sorting/insertionSort";
import mergeSort from "../sorting/mergeSort";

const SortingVisualizer = () => {
  const [numItems, setNumItems] = useState(25);
  // const [delay, setDelay] = useState(500);
  let delay = 50;
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
      <div className="topG">
        <input
          type="range"
          min="10"
          max="100"
          id="slidah"
          onChange={(event) => {
            setNumItems(event.target.value);
            setItemsArray(generateDefaultArray(event.target.value));
          }}
        />
        <button
          className="btnn"
          onClick={() => setItemsArray(shuffleArray(itemsArray))}
        >
          Shuffle
        </button>
      </div>

      <div className="barHolder">
        {itemsArray.map((item) => (
          <h1
            style={{
              height: `${(item / numItems) * 90 + 10}%`,
              width: `${numItems > 50 ? "5px" : "10px"}`,
              "margin-left": `${numItems > 60 ? "2px" : "4px"}`,
            }}
            className="bar"
            key={item}
          ></h1>
        ))}
      </div>
      <div className="btnnHolder">
        <button onClick={() => bubbleSort(itemsArray, updateBars)}>
          Bubble Sort
        </button>
        <button onClick={() => selectionSort(itemsArray, updateBars)}>
          Selection Sort
        </button>
        <button onClick={() => insertionSort(itemsArray, updateBars)}>
          Insertion Sort
        </button>
        <button onClick={() => mergeSort(itemsArray, updateBars)}>
          Merge Sort
        </button>
      </div>
    </div>
  );
};

export default SortingVisualizer;
