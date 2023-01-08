import React, { useEffect, useState } from 'react'
import { MdClose } from 'react-icons/md';
import './PriceDetails.scss'

const Options = ['Cash', 'Lease', 'Loan']

function PriceDetails(props) {
    const [option, setOption] = useState(0);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (props.showPrice) {
            setTimeout(() => {
                setVisible(true)
            }, 300);
        }
        else {
            setVisible(false)
        }
    }, [props, visible])

    return (
        <div className={`PriceDetails ${props.showPrice ? 'PriceSetVisible' : ''}`}>
            <div className={`PriceSection ${visible ? 'PriceVisible' : ''}`}>
                {props.showPrice && visible ? 
                <>
                <span className='title'>Finance Options</span>
                <MdClose onClick={() => props.setShowPrice(!props.showPrice)} className='icon' />
                <div className='Options'>
                    {Options.map((e, i) => {
                        return (
                            <span key={`Options-${i}`} onClick={() => setOption(i)} className={option === i ? 'white' : ''}>{e}</span>
                        )
                    })}
                </div>
                        <div className='total'>
                            <span>Cash Price</span>
                            <span>$72,990</span>
                        </div>
                        <div className='line'></div>
                        <div className='saving'>
                            <span>Est. 6-year gas savings</span>
                            <span>- $7,800</span>
                        </div>

                        <div className='final'>
                            <span>Price after potential savings</span>
                            <span>$65,190</span>
                        </div>
                        <div className='line'></div>
                        <div className='fee'>
                            <span>Destination fee</span>
                            <span>$1,200</span>
                        </div>
                </>
                : null}
            </div>
        </div>
    )
}

export default PriceDetails;