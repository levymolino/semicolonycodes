import React from "react";
import { Link } from "react-router-dom";
import Authside from "./authside";
import Homeside from "./homeside";
import bus from './bluebus.png'

const Navbar = () => {

  var user=localStorage.getItem('userlogined');
  
  return (
    <nav className="nav-wrapper blue darken-10">
      <Link to="/" className="brand-logo center"><h4>BLUEBUS</h4></Link>
      <Link to="/" className="brand-logo">
        <img src={bus} height={65} width={65} alt=''/>
      </Link>
      {user ? <Homeside /> : <Authside />}
    </nav>
  );
};

export default Navbar;
