import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import styles from "./Modal.module.css";

const Signup = ({ signupIsOpen }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const [passType1, setPassType1] = useState(true);
  const [passType2, setPassType2] = useState(true);

  var auth = JSON.parse(localStorage.getItem("auth"));

  const handleSignup = () => {
    if (auth === null) {
      auth = [{ username: "aaa", password: "aaa" }];
    }

    if (password1 === password2) {
      const same = auth.filter((d) => d.email === email);

      if (same.length === 0) {
        auth = [...auth, { username: username, email: email, password: password1 }];
        localStorage.setItem("auth", JSON.stringify(auth));
        localStorage.setItem("userlogined", email);
        setUsername("");
        setEmail("");
        setPassword1("");
        setPassword2("");
        window.location.reload(false);
      } else {
        alert(email + " exist!");
      }
    } else {
      alert("Passwords are not matching");
    }
  };

  return (
    <React.Fragment>
        <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <div>
            <h5 className={styles.heading}>Sign Up</h5>
          </div>
          <div>
            <button
              className={styles.closeBtn}
              onClick={() => signupIsOpen(false)}
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
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                  />
                </div>
              </div>
              <div className={styles.passwordcontainer}>
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className={styles.passwordcontainer}>
                <div>
                  <input
                    type={passType1 ? "password" : "text"}
                    value={password1}
                    placeholder="Password"
                    onChange={(e) => setPassword1(e.target.value)}
                  />
                </div>
                <div>
                  <button
                    className={styles.toggle}
                    onClick={() => {
                      setPassType1(!passType1);
                    }}
                  >
                    {passType1 ? (
                      <i className="material-icons">remove_red_eye</i>
                    ) : (
                      <i className="material-icons">security</i>
                    )}
                  </button>
                </div>
              </div>

              <div className={styles.passwordcontainer}>
                <div>
                  <input
                    type={passType2 ? "password" : "text"}
                    value={password2}
                    placeholder="Password"
                    onChange={(e) => setPassword2(e.target.value)}
                  />
                </div>
                <div>
                  <button
                    className={styles.toggle}
                    onClick={() => {
                      setPassType2(!passType2);
                    }}
                  >
                    {passType2 ? (
                      <i className="material-icons">remove_red_eye</i>
                    ) : (
                      <i className="material-icons">security</i>
                    )}
                  </button>
                </div>
              </div>

              <button onClick={handleSignup} className={styles.button30}>
                SignUp
              </button>
            </div>
          </div>
        </div>
    </React.Fragment>
  );
};

export default Signup;
