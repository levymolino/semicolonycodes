import dayjs from "dayjs";
import SeatDrawer from './availableseat/seat'
import React, { useState } from "react";

const PersonItem = ({ item }) => {
  const [openDrawer, drawerIsOpen] = useState(false);
  return (
    <div className="card">
      <div className="row">
        <div className="col">
          <img
            className="img-thumbnail"
            src={item?.image}
            alt="Car"
            width={200}
            height={200}
          />
        </div>
        <div className="col">
          <div className="card-body">
            <h5 className="card-title">
              From: {item?.location} To:{item?.destination}
            </h5>
            <p className="card-text">
              Departure: {dayjs(item?.date).format("DD MMMM YYYY")}
            </p>
            <a href="#" className="badge badge-info">
              {item?.rating.rate}
              <i className="material-icons">star</i>
            </a>
            <p className="list-group-item">
            <i className="material-icons">people</i> {item?.rating.count}
            </p>
          </div>
        </div>
        <div>
          <div className="col">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <h5>Fare: {item?.fare} Php</h5>
              </li>
            </ul>
            <div className="card-body">
            <button
             type="button" className="btn btn-primary"
              onClick={() => drawerIsOpen(true)}
            >
              Show Seats
            </button>
            </div>
          </div>
        </div>
      </div>
      {openDrawer && (
            <SeatDrawer drawerIsOpen={drawerIsOpen} key={item?.id} item={item}/>
          )}
    </div>
  );
};

export default PersonItem;
