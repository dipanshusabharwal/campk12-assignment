import React from "react";
import "./Card.css";

//card for types of courses offerred at landing page
function Card(props) {
  return (
    <div className="card col-10 col-sm-10 col-md-6 col-lg-2 m-4 mt-5 pt-3 shadow shadow-lg">
      <div className="d-flex justify-content-center align-items-center">
        <img className="card-img" src={props.url} alt={props.name} />
      </div>
      <div className="card-body">
        <h6 className="card-title text-center title-size">{props.name}</h6>
      </div>
    </div>
  );
}

export default Card;
