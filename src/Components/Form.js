import React, { Component } from "react";

export default class Form extends Component {
  state = {
    name: '',
    details: '',
    image: ''
  };

  changeHandler = event => {
    let eric = {
      [event.target.name]: event.target.value
    };
    this.setState(eric);
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.submitHandler(this.state);
    this.setState({
      name: '',
      details: '',
      image: ''
    })
  }

  render() {
    return (
      <form className='search-container' onSubmit={this.submitHandler}>
        <input
          type='text'
          placeholder='name'
          name='name'
          value={this.state.name}
          onChange={this.changeHandler}
        />
        <input
          type='text'
          placeholder='details'
          name='details'
          value={this.state.details}
          onChange={this.changeHandler}
        />
        <input
          type='text'
          placeholder='image'
          name='image'
          value={this.state.image}
          onChange={this.changeHandler}
        />
        <button className='btn'>Create an Eric?</button>
      </form>
    );
  }
}
