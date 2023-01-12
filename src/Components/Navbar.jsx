import React, { useEffect, useState } from 'react'
import { useWindowSize } from 'react-use'
import Logo from './Logo'
import './Navbar.scss'
import { MdClose } from 'react-icons/md'

const CarData = ["Model S", "Model 3", "Model X", "Model Y", "Solar Roof", "Solar Panels"]
const userNav = ["Shop", "Account", "Menu"]

function Navbar() {
    const size = useWindowSize();
    const [menu, setMenu] = useState(false);
    const scrollHandle = (title) => {
        const element = document.getElementById(title);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        setMenu(false)
    }

    useEffect(() => {
        if (size.width >= 768) {
            setMenu(false)
        }
    }, [size])

    return (
        <>
            <div className='Navbar'>
                <Logo />
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
                <button onClick={() => setMenu(!menu)} className='SmallScreen'>
                    Home
                </button>
            </div>
            {size.width < 768 ?
                <div className={`menu ${menu ? 'open' : ''}`}>
                    {menu ? <>
                        <MdClose className='icon' onClick={() => setMenu(false)} />
                        {CarData.map((e, i) => {
                            return (
                                <span onClick={() => scrollHandle(e)} key={`CarData-${i}`}>{e}</span>
                            )
                        })}
                    </> : null}

                </div>
                : null}
        </>

    )
}

export default Navbar;