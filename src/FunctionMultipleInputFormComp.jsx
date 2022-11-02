import React from 'react';
import { useState } from 'react';
import './App.js'

function FunctionMultipleInputFormComp() {
    const [data, setData] = useState({
        naam: "aman",
        fname: "mani"
    });

    const changeHandler = (e) => {
        setData((previousData) => { // previousData has old value of state. 
            return {
            ...previousData, [e.target.name] : e.target.value } // why we have used square bracket for e.target.name. spread operator spread previosData object and after comma we have updated that updated input value. we have used e.target.name because in it we have given our state name like naam and fname.so actually we updating our sate value.
        }) 
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(data);
    }

  return (
    <div className='App'>
        <h2> function based component</h2>
        <form onSubmit={submitHandler}>
            <label htmlFor='funname'>Enter your Name</label>
            <input type="text" id='funname' name='naam' value={data.naam} onChange= {changeHandler} placeholder='Enter Your Full Name' ></input>
            <label htmlFor='funfname'>Enter your Father Name</label>
            <input type="text" id='funfname' name='fname' value={data.fname} onChange= {changeHandler} placeholder="Enter Your Father's Full Name" style={{width:210}}></input>

            <button type='submit'> save</button>

        </form>
    
    </div>
  )
}

export default FunctionMultipleInputFormComp
