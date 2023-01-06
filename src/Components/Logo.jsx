import React from 'react'
import { Link } from 'react-router-dom'
import img from '../s.svg'

function Logo() {
    return (
        <Link to='/'>
            <img src={img} alt='' />
        </Link>
    )
}

export default Logo