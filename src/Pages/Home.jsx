import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Home.scss'


function Home(props) {
    const [classAni, setClassAni] = useState([false, false, false, false]);

    useEffect(() => {
        const arr = document.querySelectorAll('.HomeItem');
        arr.forEach((target) => {
            const workObserver = new IntersectionObserver((entries, observer) => {
                const [entry] = entries;
                // ClassName
                setClassAni([entry.isIntersecting, entry.isIntersecting, entry.isIntersecting, entry.isIntersecting])
            }, {
                root: null,
                threshold: 0,
            });
            workObserver.observe(target)
        })
        
    }, [])
    
    return (
        <div className='Home'>
            {props.carModel.map((e, i) => {
                return (
                    <div id={e.name} key={`carModel-${i}`} className='HomeItem'>
                        <img src={e.image} alt='' />
                        <div className={`itemTop ${classAni[i] ? 'Animate' : ''}`}>
                            <span>{e.name}</span>
                            <span>Schedule a Demo Drive</span>
                        </div>
                        <div className={`itemBottom ${classAni[i] ? 'Animate' : ''}`}>
                            <Link className='button' to={`/car/${i}`}>
                                <span>Buy Now</span>
                            </Link>
                            <Link className='button' to={`/car/${i}`}>
                                <span>Custom Order</span>
                            </Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Home;