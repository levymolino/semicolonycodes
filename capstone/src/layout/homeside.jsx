import React from 'react'
import { NavLink } from 'react-router-dom'

const Homeside = () => {


  const logout=()=>{
		localStorage.removeItem('userlogined');
    window.location.reload(false);
	}


  return (
    <div>
      <ul className="right">
        <li><NavLink to='/'>Home</NavLink></li>
        <li>{localStorage.getItem('username')}</li>
        <li><button onClick={logout}>logout</button></li>
      </ul>
    </div>
  )
}

export default Homeside