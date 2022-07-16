import React, { Component } from 'react'
import './card.css';

export default class extends Component {
  render() {
   const {title,studentInfo} =this.props
    return (
      <div>
         <div className='card'>
          <h3>{title}</h3>
        <h4>My name is:{studentInfo.name}</h4>
        <p>Training name is:{studentInfo.training}</p>
        <p>inistitute name:{studentInfo.inistitute}</p>
        <p> place:{studentInfo.place}</p>
        </div>
      </div>
    )
  }
}
