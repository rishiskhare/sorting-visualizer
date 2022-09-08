import React, { useState } from "react";
import "./visuals.css";
import Menu from "./Menu";
import bubbleSort from "../sorting/bubbleSort";
import selectionSort from "../sorting/selectionSort";
import insertionSort from "../sorting/insertionSort";
import mergeSort from "../sorting/mergeSort";
import quickSort from "../sorting/quickSort";
import LSDRadix from "../sorting/LSDRadix";

const SortingVisualizer = () => {
  const [numItems, setNumItems] = useState(25);
  let [delay, setDelay] = useState(10);

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

  const changeDelay = (changeEvent) => {
    
    setDelay((changeEvent.target.value > 300)? 3 : 10);
    //setItemsArray(generateDefaultArray(changeEvent.target.value));
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

  const margins = (n) => {
    if (n < 60) return "4px";
    if (n < 100) return "2px";
    if (n < 170) return "2px";
    if (n < 401) return "1px";
    return "1px"
  }

  const sizes = (n) => {
    if (n < 60) return "10px";
    if (n < 100) return "5px";
    if (n < 200) return "3px";
    if (n < 340) return "1.3px";
    return "1px"
  }

  return (
    <div className="body-container">
      <h1 className="header-text">Sorting Visualizer</h1>
      <div className="bar-container bar-ctr">
        {itemsArray.map((item) => (
          <h1
            style={{
              height: `${(item / numItems) * 90 + 10}%`,
              width: `${sizes(numItems)}`,
              marginLeft: `${margins(numItems)}`,
              marginRight: `${margins(numItems)}`,
            }}
            className="bar"
            key={item + Math.random()}
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
        quickSort={quickSort}
        LSDRadix={LSDRadix}
        changeDelay={changeDelay}
      />
    </div>
  );
};

export default SortingVisualizer;
