import React, { useState } from "react";
import "./visuals.css";
import Menu from "./Menu";
import bubbleSort from "../sorting/bubbleSort";
import selectionSort from "../sorting/selectionSort";
import insertionSort from "../sorting/insertionSort";
import mergeSort from "../sorting/mergeSort";
import LSDRadix from "../sorting/LSDRadix";

const SortingVisualizer = () => {
  const [numItems, setNumItems] = useState(25);
  let delay = 10;

  const generateDefaultArray = (items) => {
    const arr = [];
    for (let i = 0; i < items; i++) {
      arr.push(i);
    }
    return arr;
  };

  const changeNumItems = (changeEvent) => {
    setNumItems(changeEvent.target.value);
    setItemsArray(generateDefaultArray(changeEvent.target.value));
  };

  const [itemsArray, setItemsArray] = useState(generateDefaultArray(numItems));

  const updateBars = (items) => {
    let i = 0;
    const timer = (arr) =>
      setTimeout(() => {
        setItemsArray(arr);
      }, delay * i);
    items.forEach((arr) => {
      timer(arr);
      i++;
    });
    clearTimeout(timer);
  };

  const shuffleArray = (a) => {
    let arr = JSON.parse(JSON.stringify(a));
    for (let i = arr.length - 1; i >= 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      const temp = arr[i];
      arr[i] = arr[randomIndex];
      arr[randomIndex] = temp;
    }
    setItemsArray(arr);
  };

  return (
    <div className="body-container">
      <h1 className="header-text">Sorting Visualizer</h1>
      <div className="bar-container">
        {itemsArray.map((item) => (
          <h1
            style={{
              height: `${(item / numItems) * 90 + 10}%`,
              width: `${numItems > 50 ? "5px" : "10px"}`,
              marginLeft: `${numItems > 60 ? "2px" : "4px"}`,
              marginReft: `${numItems > 60 ? "2px" : "4px"}`,
            }}
            className="bar"
            key={item}
          ></h1>
        ))}
      </div>
      <Menu
        numItems={numItems}
        changeNumItems={changeNumItems}
        shuffleArray={shuffleArray}
        itemsArray={itemsArray}
        updateBars={updateBars}
        bubbleSort={bubbleSort}
        selectionSort={selectionSort}
        insertionSort={insertionSort}
        mergeSort={mergeSort}
        LSDRadix={LSDRadix}
      />
    </div>
  );
};

export default SortingVisualizer;
