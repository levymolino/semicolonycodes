import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import styles from "./Modal.module.css";

const SignIn = ({ loginIsOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passType, setPassType] = useState(true);

  var auth = JSON.parse(localStorage.getItem("auth"));

  const handleSignIn = () => {
    if (auth === null) {
      alert("no user found!");
    }

    const same = auth.filter((d) => d.email === email);

    if (same.length !== 0) {
      if (same[0].password === password) {
        localStorage.setItem("userlogined", email);
        setEmail("");
        setPassword("");
        window.location.reload(false);
      } else {
        alert("wrong password.");
      }
    } else {
      alert(email + "user not exist!");
    }
  };

  return (
    <React.Fragment>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <div>
            <h5 className={styles.heading}>Sign In</h5>
          </div>
          <div>
            <button
              className={styles.closeBtn}
              onClick={() => loginIsOpen(false)}
            >
              <RiCloseLine style={{ marginBottom: "-3px" }} />
            </button>
          </div>
        </div>

        <div className={styles.modalContent}>
          <div className={styles.Signup}>
            <div className={styles.passwordcontainer}>
              <div>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email"
                />
              </div>
            </div>
            <div className={styles.passwordcontainer}>
              <div>
                <input
                  type={passType ? "password" : "text"}
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <button
                  className={styles.toggle}
                  onClick={() => {
                    setPassType(!passType);
                  }}
                >
                  {passType ? (
                    <i className="material-icons">remove_red_eye</i>
                  ) : (
                    <i className="material-icons">security</i>
                  )}
                </button>
              </div>
            </div>
            <div className={styles.actionsContainer}>
              <button onClick={handleSignIn} className={styles.button30}>
                SignIn
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignIn;
