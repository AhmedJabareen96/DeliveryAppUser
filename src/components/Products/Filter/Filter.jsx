import React, { useContext } from "react";
import { FilterDispath } from "../../Context/ContextFilter";
import "./Filter.css";

export default function Filter() {
  const { dispath } = useContext(FilterDispath);
  return (
    <div className="filter_container">
      <div className="filter_btnBox">
        <button onClick={() => dispath({ type: "ALL" })} className="filter_btn">
          All
        </button>
        <button
          onClick={() => dispath({ type: "VEGETABLE" })}
          className="filter_btn"
        >
          Fruits & Veggies
        </button>
        <button
          onClick={() => dispath({ type: "FRUIT" })}
          className="filter_btn"
        >
          Clothes
        </button>
        <button
          onClick={() => dispath({ type: "NUTS" })}
          className="filter_btn"
        >
          Electronics
        </button>
        <button
          onClick={() => dispath({ type: "BEANS" })}
          className="filter_btn"
        >
          Cleaning 
        </button>
      </div>
    </div>
  );
}
