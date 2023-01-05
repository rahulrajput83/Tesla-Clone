import React from 'react';
import './Button.scss'

function Button(props) {
  return (
    <button className={props.className}>{props.title}</button>
  )
}

export default Button