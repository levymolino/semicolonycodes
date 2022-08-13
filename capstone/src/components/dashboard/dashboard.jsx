import React, { useState, useEffect } from "react";
import SignIn from "../pages/authentication/signIn";
import Signup from "../pages/authentication/signUp";
import Welcome from "./welcome";

function MainScreen() {
  var [loginScreen, setLoginScreen] = useState(false);
  var [signupScreen, setSignupScreen] = useState(false);
  var [loginedScreen, setLoginedScreen] = useState(false);

  const afterSignup = (username) => {
    setSignupScreen(false);
    setLoginScreen(false);
    setLoginedScreen(true);
  };

  const afterLogout = () => {
    localStorage.removeItem("userlogined");
    setSignupScreen(true);
    setLoginScreen(false);
    setLoginedScreen(false);
  };

  useEffect(() => {
    var user = localStorage.getItem("userlogined");
    if (user !== null || user !== "") {
      setSignupScreen(false);
      setLoginScreen(false);
      setLoginedScreen(true);
    }
  }, []);

  return (
    <div className="MainScreen">
      {signupScreen ? (
        <div>
          <Signup afterSignup={afterSignup} />
          <button
            onClick={() => {
              setSignupScreen(false);
              setLoginScreen(true);
            }}
          >
            do login
          </button>
        </div>
      ) : (
        ""
      )}

      {loginScreen ? (
        <div>
          <SignIn afterSignIn={afterSignup} />
          <button
            onClick={() => {
              setSignupScreen(true);
              setLoginScreen(false);
            }}
          >
            do signup
          </button>
        </div>
      ) : (
        ""
      )}

      {loginedScreen ? (
        <div>
          <button onClick={afterLogout}>logout</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default MainScreen;
