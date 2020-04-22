import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card col-2 ml-4 mt-5 pt-3">
      <div className="d-flex justify-content-center align-items-center">
        <img className="card-img" src={props.url} alt={props.name} />
      </div>
      <div className="card-body">
        <h5 className="card-title text-center">{props.name}</h5>
      </div>
    </div>
  );
}

export default Card;
