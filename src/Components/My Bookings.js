import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class MyBookings extends Component {
  render() {
    return (
      <div className='text-center m-4 p-4'>
        <h3 className='text-center text-danger'>please login to see the bookings</h3>
        <Link to='/'>Go to Login</Link>

      </div>
    )
  }
}
