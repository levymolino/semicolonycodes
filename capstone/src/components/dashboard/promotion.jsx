import React from "react";
import one from "./images/numberone.png";
import people from "./images/people.png";
import confetti from "./images/confetti.png";
import "./dash.css";

function Promocode() {
  return (
    <React.Fragment>
      <div className="promo-container">
        <div className="promo-box">
          <h4>First Timer promo</h4>
          <div className="logo">
            <img src={one} height={150} width={150} alt="" />
          </div>
          <p>
            For the first time customer. We are giving 30% off your expenses. So
            what are you waiting for. Travel with us.
          </p>
        </div>
        <div className="promo-box">
          <h4>Your Birthday promo</h4>
          <div className="logo">
            <img src={confetti} height={150} width={150} alt="" />
          </div>
          <p>
            For the first time customer. We are giving 30% off your expenses. So
            what are you waiting for. Travel with us.
          </p>
        </div>
        <div className="promo-box">
          <h4>Group Trip Promo</h4>
          <div className="logo">
            <img src={people} height={150} width={150} alt="" />
          </div>
          <p>
            For the first time customer. We are giving 30% off your expenses. So
            what are you waiting for. Travel with us.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Promocode;
