import React from 'react';
import Button from '../Components/Button';
import Input from '../Components/Input';
import './Checkout.scss';

function Checkout() {
    return (
        <div className='Checkout'>
            <div className='left'>
                <div className='leftContent'>
                    <span className='heading'>Confirm Order</span>
                    <Input className='InputField' title='Email Address' type='text' />
                    <Input className='InputField' title='Name on card' type='text' />
                    <Input className='InputField' title='Card number' type='number' />
                    <Input className='InputField' title='Expiration date (MM/YY)' type='text' />
                    <Input className='InputField' title='Address' type='text' />
                    <div className='City'>
                    <Input className='InputField' title='City' type='text' />
                    <Input className='InputField' title='State / Province' type='text' />
                    <Input className='InputField' title='Postal code' type='text' />
                    </div>
                    <Button className='payment margin-top' title='Pay $41,940' />
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