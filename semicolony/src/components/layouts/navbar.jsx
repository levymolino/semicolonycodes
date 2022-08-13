import React from "react";
import logo from "../images/Logo.png";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="1">
            <img
              src={logo}
              alt=""
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
            Sem;colony
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="1">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="1">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="1">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success me-5" type="submit">
              Search
            </button>
          </form>
          <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#demo"
          >
            Authentication
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
