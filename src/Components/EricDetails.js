import React, { Component } from 'react';
import EricCard from './EricCard'

export default class EricDetails extends Component {
  render(){
    const { eric } = this.props
    console.log(eric);
    return(
      <div>
        <div>
          <h1>{eric.name.toUpperCase()}</h1>
          <img alt={eric.name} src={eric.image}/>
          <h2>DETAILS</h2>
          <p>{eric.details}</p>
        </div>
        <button className='btn' onClick={this.props.toggle}>⬅️ All Erics</button>
        <button className='btn' onClick={() => this.props.favHandler(eric)}>Add Eric To Purse 👛</button>
        <button className='btn'>Edit Eric</button>
        <button className='btn'>Next Eric ➡️</button>
      </div>
    )
  }
}
