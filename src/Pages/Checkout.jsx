import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../Components/Button';
import Input from '../Components/Input';
import './Checkout.scss';
import { formatPrice } from '../Components/formatter';

function Checkout() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const navigate = useNavigate();
    const [taxPrice, setTaxPrice] = useState(0);
    const [subTotal, setSubTotal] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        if(!cart.name) {
            navigate('/')
        }
    }, [navigate, cart])

    useEffect(() => {
        setTaxPrice(formatPrice((cart.price * 2) / 100));
        setSubTotal(formatPrice(cart.price));
        setTotal(formatPrice(cart.price + 500 + ((cart.price * 2) / 100)))
    }, [cart])

    const handleClick = () => {
        let action = {
            type: 'Final',
            payload: total
        }
        dispatch(action);
        return navigate('/confirmed')
    }
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
                    <Button click={handleClick} className='payment margin-top' title={`Pay ${total}`} />
                </div>
            </div>
            <div className='right'>
                <img src='/Model3.jpg' alt='' />
                <span className='title'>{cart.name}</span>
                <span className='desc'>{cart.desc}</span>
                <div className='Order-Summary'>
                    <span className='titleOrder'>Order Summary</span>
                    <div className='detail'>
                        <span>Subtotal</span>
                        <span>{subTotal}</span>
                    </div>
                    <div className='detail'>
                        <span>Shipping Estimate</span>
                        <span>$500</span>
                    </div>
                    <div className='detail'>
                        <span>Tax Estimate</span>
                        <span>{taxPrice}</span>
                    </div>
                    <div className='detail'>
                        <span>Grand Total</span>
                        <span>{total}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;