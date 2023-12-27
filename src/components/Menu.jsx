import React from "react";
import { ButtonToolbar, Form, Button } from "react-bootstrap";
import quickSort from "../sorting/quickSort";

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
  changeDelay
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
          min="10"
          max="250"
          value={numItems}
          onChange={(event) => {changeNumItems(event); changeDelay(event)}}
        />
        <Button
          className="mx-2 p-2 btn"
          onClick={() => shuffleArray(itemsArray)}
        >
          Shuffle
        </Button>
        <Button
          className="mx-2 p-2 btn"
          variant="outline-primary"
          onClick={() => bubbleSort(itemsArray, updateBars)}
        >
          Bubble Sort
        </Button>
        <Button
          className="mx-2 p-2 btn"
          variant="outline-primary"
          onClick={() => selectionSort(itemsArray, updateBars)}
        >
          Selection Sort
        </Button>
        <Button
          className="mx-2 p-2 btn"
          variant="outline-primary"
          onClick={() => insertionSort(itemsArray, updateBars)}
        >
          Insertion Sort
        </Button>
        <Button
          className="mx-2 p-2 btn"
          variant="outline-primary"
          onClick={() => mergeSort(itemsArray, updateBars)}
        >
          Merge Sort
        </Button>
        <Button
          className="mx-2 p-2 btn"
          variant="outline-primary"
          onClick={() => quickSort(itemsArray, updateBars)}
        >
          Quick Sort
        </Button>
        <Button
          className="mx-2 p-2 btn"
          variant="outline-primary"
          onClick={() => LSDRadix(itemsArray, updateBars)}
        >
          LSD Radix Sort
        </Button>
      </ButtonToolbar>
    </div>
  );
};

export default Menu;
