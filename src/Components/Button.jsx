import React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss'

function Button(props) {
  return props.title.includes('Pay ') ? <Link className={props.className} to='/confirmed'>{props.title}</Link> : props.title === 'Continue to Payment' ? <button className={props.className} onClick={props.click}>{props.title}</button> :<button className={props.className}>{props.title}</button>
}

export default Button