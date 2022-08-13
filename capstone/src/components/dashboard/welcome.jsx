import React, { useState } from "react";
import styles from "./home.module.css";
import "./dash.css";
import bus from "./images/bluebus.png";
import Promocode from "./promotion";
import SignIn from "../pages/authentication/signIn";
import Signup from "../pages/authentication/signUp";
import BusData from "./availablebus/busdata";


const Welcome = () => {
  const [liOpen, loginIsOpen] = useState(false);
  const [suOpen, signupIsOpen] = useState(false);

  var user = localStorage.getItem("userlogined");

  return (
    <React.Fragment>
      {user ? null : (
        <main>
          <div className={styles.authside}>
            <button
              className={styles.primaryBtn}
              onClick={() => loginIsOpen(true)}
            >
              Sign In
            </button>
            <button
              className={styles.primaryBtn}
              onClick={() => signupIsOpen(true)}
            >
              Sign Up
            </button>
          </div>
          {liOpen && <SignIn loginIsOpen={loginIsOpen} />}
          {suOpen && <Signup signupIsOpen={signupIsOpen} />}
        </main>
      )}
      <div className="logo">
        <img src={bus} height={200} width={200} alt="" />
      </div>
      <BusData />
      <Promocode />
    </React.Fragment>
  );
};

export default Welcome;
