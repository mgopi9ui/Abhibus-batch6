import React from 'react';
import { Link } from 'react-router-dom';
import abhibuslogo from '../logo.png';
import './Header.css';


export default function Header() {
  return (
    <div>
        <header className="d-flex justify-content-between justify-content-md-around ">
        <img src={abhibuslogo} height="55" width="130px" alt="abhibus logo"/>
       
        <nav className="navOption" >
            <i className="fas fa-bars"></i> 
            <div>
            <Link to="/bus">Bus</Link>
            <Link to="/trains">Trains</Link>
            <Link to="/hotels">Hotels</Link>
            <Link to="/rentals">Rentals</Link>
            <Link to="/mybookings">MyBookings</Link>

            <button type='button' className='btn btn-warning text-align-center w-10 mx-0 px-2 py-0'><Link to="/">Login</Link></button>
            </div>
        </nav> 
       </header>
    <hr className="m-0"/>
    </div>
  )
}
