import React from "react";

const Card = props => {
  return (
    <div className="card">
      <img className="card-img-top" src={props.case.img} alt="Card image cap" />
      <div className="card-body">
        <div className="card-header-info">
          <h5 className="card-title">
            <u>{props.case.tag}</u>
          </h5>
          <img
            src={require("../../static/images/car_front.svg")}
            alt="marker"
          />
          <p className="card-text">{props.case.make}</p>
        </div>
        <p>lat: {props.case.lat}</p>
        <div className="card-located">
          <p>lng: {props.case.lng}</p>
          <button onClick={props.locate.bind(this, props.case)}>Locate</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
