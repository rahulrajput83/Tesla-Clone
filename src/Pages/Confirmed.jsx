import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import './Confirmed.scss'
import { FaCheckCircle } from 'react-icons/fa'
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { formatPrice } from '../Components/formatter';

function Confirmed() {
  const navigate = useNavigate();
  const { width, height } = useWindowSize();
  const uniqueId = uuid();
  const Id = uniqueId.slice(0, 8);
  const data = useSelector((state) => state.cart);
  const total = useSelector((state) => state.finalPrice);
  const price = formatPrice(data.price);
  
  useEffect(() => {
    if (!total) {
      navigate('/')
    }
  }, [navigate, total]);

  return (
    <div className='Confirmed'>
      <Confetti width={width} height={height} />
      <span className='title'>Order Placed!</span>
      <span className='desc'>Check the status of recent orders, manage returns, and discover similar products.</span>
      <div className='card1'>
        <div className='item'>
          <span>Order number</span>
          <span>{Id}</span>
        </div>
        <div className='item'>
          <span>Total amount</span>
          <span>{total}</span>
        </div>
      </div>
      <div className='Order'>
        <div className='img'>
          <img src={data.image} alt='' />
        </div>
        <div className='data'>
          <span>{data.name}</span>
          <span>{price}</span>
          <span>{data.desc}</span>
          <FaCheckCircle className='icon' />
        </div>

      </div>

    </div>
  )
}

export default Confirmed;