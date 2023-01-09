import React from 'react';
import Input from '../Components/Input';
import './Checkout.scss';

function Checkout() {
    return (
        <div className='Checkout'>
            <div className='left'>
                <div className='leftContent'>
                    <Input className='InputField' title='First name' type='text' />
                    <Input className='InputField' title='First name' type='text' />
                    <Input className='InputField' title='First name' type='text' />
                    <Input className='InputField' title='First name' type='text' />
                </div>
            </div>
            <div className='right'>
                <img src='/Model3.jpg' alt='' />
                <span className='title'>Model 3</span>
                <span className='desc'>This is test demo</span>
                <div className='Order-Summary'>
                    <span className='titleOrder'>Order Summary</span>
                    <div className='detail'>
                        <span>Subtotal</span>
                        <span>$41,940</span>
                    </div>
                    <div className='detail'>
                        <span>Shipping Estimate</span>
                        <span>$500</span>
                    </div>
                    <div className='detail'>
                        <span>Tax Estimate</span>
                        <span>$41,940</span>
                    </div>
                    <div className='detail'>
                        <span>Grand Total</span>
                        <span>$41,940</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;