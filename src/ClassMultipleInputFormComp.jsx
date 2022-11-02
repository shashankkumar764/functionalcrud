import React, { Component } from 'react';
import './App.css'

export default class ClassMultipleInputFormComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         naam:'',
         fname:'',
      }
    }
    changeHandler= (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })  
    }
    
    submitHandler =(e) => {
        e.preventDefault();
        console.log(this.state.naam, this.state.fname)
    }
  render() {
    return (
      <div>
        <form className='App' onSubmit={this.submitHandler}>
            <label htmlFor='name'>Enter your Name</label>
            <input type="text" id='name' name='naam' value={this.state.naam} onChange={this.changeHandler} placeholder='Enter Your Full Name' ></input>

            <label htmlFor='fname'>Enter your Father Name</label>
            <input type="text" id='fname' name='fname' value={this.state.fname} onChange={this.changeHandler} placeholder="Enter Your Father's Full Name" style={{width:210}}></input>

            <button type='submit'> save</button>

        </form>
      </div>
    )
  }
}
