import React, { Component } from 'react';
import EricCard from './EricCard'
import { Link } from 'react-router-dom'

export default class EricDetails extends Component {
  state = {
    id: this.props.eric.id,
    name: this.props.eric.name,
    details: "",
    image: this.props.eric.image
  }

  changeHandler = event => {
    this.setState({details: event.target.value}, () => {console.log(this.state.details)});
  };


  render(){

    const { eric } = this.props
    return(
      <div className= 'App'>
        <div>
          <h1>{eric.name.toUpperCase()}</h1>
          <img alt={eric.name} src={eric.image} onClick={this.props.toggle}/>
          <h2>DETAILS</h2>
          <p>{eric.details}</p>
          <div>
          <form onSubmit={(event) => this.props.patchHandler(event, this.state)}>
            <input
              type='text'
              placeholder= 'edit eric details'
              name='details'
              onChange={this.changeHandler}
            />
            <button>Edit Eric</button>
          </form>
        </div>

        <button className='btn' onClick={this.props.toggle}>⬅️ All Erics</button>
        <button className='btn' onClick={() => this.props.favHandler(eric)}>👛 Add Eric To Purse</button>
        <Link to="/special-eric">Special Eric ➡️</Link>
      </div>
    </div>
    )
  }
}
