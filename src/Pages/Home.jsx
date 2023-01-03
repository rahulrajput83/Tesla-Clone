import React, { useEffect, useState } from 'react'
import './Home.scss'


function Home(props) {
    const [classAni, setClassAni] = useState([false, false, false, false]);

    useEffect(() => {
        const arr = document.querySelectorAll('.HomeItem');
        arr.forEach((target) => {
            const workObserver = new IntersectionObserver((entries, observer) => {
                const [entry] = entries;
                // ClassName
                console.log(entry)
                setClassAni([entry.isIntersecting, entry.isIntersecting, entry.isIntersecting, entry.isIntersecting])
            }, {
                root: null,
                threshold: 0,
            });
            workObserver.observe(target)
        })
        
    }, [])
    useEffect(() => {
        console.log(classAni)
    }, [classAni])
    return (
        <div className='Home'>
            {props.carModel.map((e, i) => {
                return (
                    <div key={`carModel-${i}`} className='HomeItem'>
                        <img src={e.image} alt='' />
                        <div className={`itemTop ${classAni[i] ? 'Animate' : ''}`}>
                            <span>{e.name}</span>
                            <span>Schedule a Demo Drive</span>
                        </div>
                        <div className={`itemBottom ${classAni[i] ? 'Animate' : ''}`}>
                            <button>Buy Now</button>
                            <button>Custom Order</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Home;