import React, { Component } from 'react';
import EricCard from '../Components/EricCard'

export default class PurseContainer extends Component {

  mapDeErics = () => {
    return this.props.erics.map(eric => (
      <EricCard key={eric.id} eric={eric} clickHandler={this.props.clickHandler}/>
    ))
  }

  render(){
    return(
      <div className='purse-container'>
      <div><h1>👛 my eric purse 👛</h1></div>
      {this.mapDeErics()}
      </div>
    )
  }
}
