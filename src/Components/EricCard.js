import React, { Component } from 'react';

export default class EricCard extends Component {

  render(){
    const { eric } = this.props
    return(
      <div>
      <div className='eric-card'>
        <img alt={eric.name}
        src={eric.image}
        onClick={() => this.props.clickHandler(eric)}
        className='eric-card-images'/>
      </div>
      <div>  <h2>{eric.name}</h2> </div>
      <button className='btn' onClick={() => this.props.deleteEric(eric)}>Good Riddance Eric?</button>
      </div>
    )
  }
}
