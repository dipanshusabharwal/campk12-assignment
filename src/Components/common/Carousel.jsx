import React, { useState } from "react";
import data from "../../data.json";
import Card from "./Card";
import uuid from "uuid-random";

function Carousel() {
  let [arr, setArr] = useState(data.cards.filter((e, i) => i >= 0 && i <= 3));
  let [idx, setIdx] = useState(0);

  function onInr(idx) {
    idx = Math.min(idx + 1, data.cards.length - 4);
    setArr(data.cards.filter((e, i) => i >= idx && i <= idx + 3));
    setIdx(idx);
  }

  function onDcr(idx) {
    idx = Math.max(idx - 1, 0);
    setArr(data.cards.filter((e, i) => i >= idx && i <= idx + 3));
    setIdx(idx);
  }

  return (
    <div className="row justify-content-center m-0">
      {idx === 0 ? null : (
        <div
          onClick={() => onDcr(idx)}
          className="align-self-center btn bg-light p-3"
        >
          <img src="resources/cards/previous-page.svg" alt="Previous Page" />
        </div>
      )}
      {arr.map((card) => (
        <Card name={card.name} url={card.url} key={uuid()} />
      ))}
      {idx === data.cards.length - 4 ? null : (
        <div
          onClick={() => onInr(idx)}
          className="align-self-center btn bg-light p-3 ml-4"
        >
          <img src="resources/cards/next-page.svg" alt="Next Page" />
        </div>
      )}
    </div>
  );
}

export default Carousel;
