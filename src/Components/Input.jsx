import React from 'react'

function Input(props) {
  return (
    <div className='InputField'>
    <span>{props.title}</span>
    <input type={props.type} className='Input' />
    </div>
    
  )
}

export default Input