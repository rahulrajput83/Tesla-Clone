import React from 'react';
import './Button.scss'

function Button(props) {
  return props.title && props.title.includes('Pay ') ? <button onClick={props.click} className={props.className}>{props.title}</button> : props.title === 'Continue to Payment' ? <button className={props.className} onClick={props.click}>{props.title}</button> :<button className={props.className}>{props.title}</button>
}

export default Button