import React from 'react'
import { useState } from 'react'
import Textbox from './formComponents/Textbox'

const Form = () => {

  const [data,setData] = useState({
    name:"",
    Fname:""
  });

  const submitHandler = (e) =>{
    e.preventDefault();
    console.log(data);
  }

  const changeHandler = (field, enterdValue) => {
    setData((previous) => {
      return {
        ...previous, [field] : enterdValue //why we have to use square bracket to access e.target.name property e object.
      }
    })
  }

  return (
    <>
    <Textbox handleChange={changeHandler} placeholder = 'Enter Your Full Name' label = 'Name' id='name' name='name'/>
    <Textbox handleChange={changeHandler} placeholder = "Enter Your Fahter's Name" label = 'Father Name' id='Fname' name='Fname'/>
    <form onSubmit={submitHandler}>
      <button type='submit'>Save</button>
    </form>
    </>
  )
}

export default Form
