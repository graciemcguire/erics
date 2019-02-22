import React, { Component } from 'react';
import EricContainer from './EricContainer'
import PurseContainer from './PurseContainer'
import EricDetails from '../Components/EricDetails'
import Form from '../Components/Form'
import SearchForm from '../Components/SearchForm'

export default class MainContainer extends Component {
  state = {
    erics: [],
    favErics: [],
    clicked: false,
    currentEric: {},
    searchTerm: '',
  }

  componentDidMount(){
    console.log('in mount');
    fetch('http://localhost:3001/erics')
      .then(r => r.json())
      .then(data => {
        this.setState({
          erics: data
      })
    })
  }


  favHandler = ericObj => {
    if (this.state.favErics.filter(eric => eric.id === ericObj.id).length === 0){
      this.setState({ favErics: [ericObj, ...this.state.favErics] })
    }
  }

  removeHandler = ericObj => {
    let emptyPurse = this.state.favErics.filter(eric => eric.id !== ericObj.id)
    this.setState({favErics: emptyPurse})
  }

  submitHandler = ericObj => {
    let newEric =[ericObj, ...this.state.erics]

    fetch('http://localhost:3001/erics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        erics: newEric
      })
    }
  )
    .then(r => r.json())
    .then(erics => this.setState({
      erics: newEric
    }))
  }

  filterErics = () => {
    return this.state.erics.filter(eric =>
      eric.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }

  changeHandler = event => {
    this.setState({
      searchTerm: event.target.value
    })
    this.filterErics()
  }


  deetsHandler = ericObj => {
    if(this.state.erics.filter(eric => eric.id === ericObj.id)){
      this.setState({ currentEric: ericObj, clicked: true })
    }
  }

  patchHandler = (event, ericObj) => {
    let allErics = [...this.state.erics].map(eric => {
      if(eric.id === ericObj.id){
        return ericObj
      } else {
        return eric
      }
    })
    console.log('made it',allErics);
    event.preventDefault()
    console.log(ericObj);
    fetch(`http://localhost:3001/erics/${this.state.currentEric.id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(ericObj)
    })
    .then(r => r.json())
    .then(data => this.setState({currentEric: data, erics: allErics}))
  }

  deleteEric = ericObj => {
    let remainingErics = this.state.erics.filter(eric => eric.id !== ericObj.id)
    fetch(`http://localhost:3001/erics/${ericObj.id}`,{ method: 'DELETE' })
    .then(r => r.json())
    .then(data => (this.setState({  erics: remainingErics })))
  }


  toggleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  renderErics = () => {
    if (!this.state.clicked){
      return  <EricContainer
      erics={this.filterErics()}
      deetsHandler={this.deetsHandler}
      deleteEric={this.deleteEric}/>
    } else {
      return <EricDetails eric={this.state.currentEric}
      favHandler={this.favHandler}
      toggle={this.toggleClick}
      removeHandler={this.removeHandler}
      patchHandler={this.patchHandler}
      />
    }}

  render(){
    return(
      <div>
        <h1>choose ur erics</h1>
        <SearchForm className='btn' changeHandler={this.changeHandler}/>
        <PurseContainer erics={this.state.favErics} clickHandler={this.removeHandler}/>
        { this.renderErics() }
        <Form submitHandler={this.submitHandler} />
      </div>
    )
  }
}
