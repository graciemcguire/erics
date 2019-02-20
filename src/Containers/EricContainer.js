import React, { Component } from 'react';
import EricCard from '../Components/EricCard'

export default class EricContainer extends Component {

  mapDeErics = () => {
    return this.props.erics.map(eric => (
      <EricCard key={eric.id}
      eric={eric}
      clickHandler={this.props.deetsHandler}
      deleteEric={this.props.deleteEric}/>
    ))
  }

  render(){
    return(
      <div className='eric-container'>
      {this.mapDeErics()}
      </div>
    )
  }
}
