import React from 'react'

const Textbox = (props) => {

  return (
    <form>
      <label htmlFor={props.id}>{props.label}</label>
      <input type="text" onChange={(e) => props.handleChange(e.target.name, e.target.value)} id={props.id} name={props.name} placeholder={props.placeholder}/>
    </form>
  )
}

export default Textbox
