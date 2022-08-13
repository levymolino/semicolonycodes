import React, { useRef, useState } from "react";
import styles from "./Modal.module.css";
import dayjs from "dayjs";
import { RiCloseLine } from "react-icons/ri";
import { v4 as uuid } from "uuid";
import ReactToPrint, { useReactToPrint } from "react-to-print";

const FinalReceipt = ({
  finalReceiptIsOpen,
  item,
  result,
  person,
  email = { email },
  cardName = { cardName },
  cardNumber = { cardNumber },
}) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Ticket-Details",
    onAfterPrint: ()=> window.location.reload(false),
  });

  var user = localStorage.getItem("userlogined");

  const unique_id = uuid();
  const small_id = unique_id.slice(0, 16);

  const confinumber = cardNumber.slice(-4);

  return (
    <React.Fragment>
      <div
        className={styles.modal}
        key={item?.id}
        result={result}
        person={person}
        email={email}
        cardName={cardName}
        cardNumber={cardNumber}
      >
        <div className={styles.modalHeader}>
          <div>
            <button
              className={styles.closeBtn}
              onClick={() => finalReceiptIsOpen(false)}
            >
              <RiCloseLine style={{ marginBottom: "-3px" }} />
            </button>
          </div>
        </div>

        <div className="row" ref={componentRef}>
          <div className="col">
            <h4 className={styles.seatid}>Reference No.: {small_id}</h4>
            <h5 className={styles.seatid}>
              <i class="material-icons">airport_shuttle</i>
              {item.location}
            </h5>
            <h5 className={styles.seatid}>
              <i class="material-icons">location_on</i>
              {item.destination}
            </h5>
          </div>
          <div className="col">
            <h5 className={styles.seatid}>Ticket Details</h5>
            <div className={styles.seatid}>Client: {email ? email : user}</div>
            <div className={styles.seatid}>
              Departure: {dayjs(item?.date).format("DD MMMM YYYY")}
            </div>
            <div className={styles.seatid}>Seat Numbers: {person}</div>
            <div className={styles.seatid}>Receipt: {result} pesos</div>
            <div className={styles.seatid}>
              Card number: ***********{confinumber}
            </div>
            <div className={styles.seatid}>Card Name: {cardName}</div>
          </div>
        </div>
        <div className="col">
          <button onClick={handlePrint} className={styles.button30}>
            print
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FinalReceipt;
