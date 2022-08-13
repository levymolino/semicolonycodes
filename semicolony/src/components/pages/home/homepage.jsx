import React, { Component } from "react";
import Navbar from "../../layouts/navbar";

class Homepage extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar />
        <div class="offcanvas offcanvas-end" id="demo">
          <div class="offcanvas-header">
            <h1 class="offcanvas-title">Sign In / Sign Up</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
            ></button>
          </div>
          <div class="offcanvas-body">
            <p>Some text lorem ipsum.</p>
            <p>Some text lorem ipsum.</p>
            <p>Some text lorem ipsum.</p>
            <button class="btn btn-secondary" type="button">
              A Button
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Homepage;
