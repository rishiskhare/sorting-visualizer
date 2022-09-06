import React from "react";
import { ButtonToolbar, Form, Button } from "react-bootstrap";

const Menu = ({
  numItems,
  changeNumItems,
  shuffleArray,
  itemsArray,
  updateBars,
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  LSDRadix,
}) => {
  return (
    <div className="menu">
      <ButtonToolbar className="d-flex flex-row align-items-center justify-content-center">
        {/* {proceed ? (
          <button
            className="p-2 btn play-pause-btn"
            onClick={() => setProceed(false)}
          >
            Pause
          </button>
        ) : (
          <button
            className="p-2 btn play-pause-btn"
            onClick={() => setProceed(true)}
          >
            Play
          </button>
        )} */}

        <Form.Range
          className="mx-3 p-0 slider"
          min="1"
          max="100"
          value={numItems}
          onChange={changeNumItems}
        />
        <Button
          className="mx-2 p-2 btn"
          onClick={() => shuffleArray(itemsArray)}
        >
          Shuffle
        </Button>
        <Button
          className="mx-2 p-2 btn"
          onClick={() => bubbleSort(itemsArray, updateBars)}
        >
          Bubble Sort
        </Button>
        <Button
          className="mx-2 p-2 btn"
          onClick={() => selectionSort(itemsArray, updateBars)}
        >
          Selection Sort
        </Button>
        <Button
          className="mx-2 p-2 btn"
          onClick={() => insertionSort(itemsArray, updateBars)}
        >
          Insertion Sort
        </Button>
        <Button
          className="mx-2 p-2 btn"
          onClick={() => mergeSort(itemsArray, updateBars)}
        >
          Merge Sort
        </Button>
        <Button
          className="mx-2 p-2 btn"
          onClick={() => LSDRadix(itemsArray, updateBars)}
        >
          LSD Radix Sort
        </Button>
      </ButtonToolbar>
    </div>
  );
};

export default Menu;
