import React, { useState } from "react";
import styles from "./Modal.module.css";
import dayjs from "dayjs";
import { RiCloseLine } from "react-icons/ri";
import FinalReceipt from "./finalreceipt";

const ReceiptDrawer = ({ receiptIsOpen, item, result, person }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setcardNumber] = useState("");
  const [cardName, setcardName] = useState("");
  const [show, setShow] = useState(false);
  const [openFinalReceipt, finalReceiptIsOpen] = useState(false);

  var user = localStorage.getItem("userlogined");


  const handleChange = (e) => {
    const checked = e.target.checked;
    setShow(checked);
  };
  return (
    <React.Fragment>
      <div
        className={styles.modal}
        key={item?.id}
        result={result}
        person={person}
      >
        <div className={styles.modalHeader}>
          <div>
            <button
              className={styles.closeBtn}
              onClick={() => receiptIsOpen(false)}
            >
              <RiCloseLine style={{ marginBottom: "-3px" }} />
            </button>
          </div>
        </div>

        <div className="col">
          {user ? null : (
            <div className={styles.modalContent}>
              <div className={styles.Signup}>
                <div className={styles.passwordcontainer}>
                  <div>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className={styles.passwordcontainer}>
                  <div>
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          <form action="#" className={styles.seatrow}>
            <p>
              <label>
                <input type="checkbox" name="LWS1" onChange={handleChange} />
                <span>CREDIT</span>
              </label>
            </p>
            <p>
              <label>
                <input type="checkbox" name="LWS1" onChange={handleChange} />
                <span>DEBIT</span>
              </label>
            </p>
          </form>
        </div>

        {show ? (
          <div className="col">
            <div className={styles.modalContent}>
              <div className={styles.Signup}>
                <div className={styles.passwordcontainer}>
                  <div>
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setcardNumber(e.target.value)}
                      placeholder="Card Number"
                    />
                  </div>
                </div>
                <div className={styles.passwordcontainer}>
                  <div>
                    <input
                      type="text"
                      value={cardName}
                      onChange={(e) => setcardName(e.target.value)}
                      placeholder="Card Name"
                    />
                  </div>
                </div>
                <div className={styles.actionsContainer}>
                  <button
                    className={styles.button30}
                    onClick={() => finalReceiptIsOpen(true)}
                  >
                    PROCEED
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        <div className="col">
          <div className="row">
            <h1 className={styles.closeBtn}>
              {item.location}
              <i className="material-icons">airport_shuttle</i> ---------{" "}
              <i className="material-icons">location_on</i>
              {item.destination}
            </h1>
          </div>
          <div className={styles.details}>
            <div className="row">
              <h1 className={styles.closeBtn}>
                <i className="material-icons">date_range</i>{" "}
                {dayjs(item?.date).format("DD MMMM YYYY")}
              </h1>
            </div>
          </div>
          <div className={styles.details}>
            <div className="row">
              <h1 className={styles.closeBtn}>
                <i className="material-icons">airline_seat_recline_normal</i>{" "}
                {person}
              </h1>
            </div>
          </div>
          <h4 className={styles.seatid}>Total:</h4>
          <h4 className={styles.seatid}>{result} Pesos</h4>
        </div>
      </div>
      {openFinalReceipt && (
        <FinalReceipt
          openFinalReceipt={openFinalReceipt}
          key={item?.id}
          item={item}
          result={result}
          person={person}
          email={email}
          cardName={cardName}
          cardNumber={cardNumber}
        />
      )}
    </React.Fragment>
  );
};

export default ReceiptDrawer;
