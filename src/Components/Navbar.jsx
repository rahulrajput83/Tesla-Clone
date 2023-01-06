import React from 'react'
import { Link } from 'react-router-dom'
import img from '../s.svg'
import './Navbar.scss'

const CarData = ["Model S", "Model 3", "Model X", "Model Y", "Solar Roof", "Solar Panels"]
const userNav = ["Shop", "Account", "Menu"]

function Navbar() {
    const scrollHandle = (title) => {
        const element = document.getElementById(title);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }

    }
    return (
        <div className='Navbar'>
            <Link to='/'>
                <img src={img} alt='' />
            </Link>
            <div className='CarData'>
                {CarData.map((e, i) => {
                    return (
                        <span onClick={() => scrollHandle(e)} key={`CarData-${i}`}>{e}</span>
                    )
                })}
            </div>
            <div className='CarData'>
                {userNav.map((e, i) => {
                    return (
                        <span key={`userNav-${i}`}>{e}</span>
                    )
                })}
            </div>
        </div>
    )
}

export default Navbar;