import React from 'react'
import img from '../s.svg'
import './Navbar.scss'

const CarData = ["Model S", "Model 3", "Model X", "Model Y", "Solar Roof", "Solar Panels"]
const userNav = ["Shop", "Account", "Menu"]

function Navbar() {
  return (
    <div className='Navbar'>
        <img src={img} alt='' />
        <div className='CarData'>
            {CarData.map((e, i) => {
                return (
                    <span onClick={() => window.location.replace(`/#${e}`)} key={`CarData-${i}`}>{e}</span>
                )
            })}
        </div>
        <div className='CarData'>
            {userNav.map((e, i) => {
                return(
                    <span key={`userNav-${i}`}>{e}</span>
                )
            })}
        </div>
    </div>
  )
}

export default Navbar;