import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../Components/Button';
import './CarDetail.scss'
import { FaAngleDown, FaAngleLeft, FaAngleRight, FaAngleUp } from 'react-icons/fa'
import comp1 from '../Images/compositor1.jpg';
import comp2 from '../Images/compositor2.jpg';
import comp3 from '../Images/compositor3.jpg'
import { TbMessage } from 'react-icons/tb'
import ChatSection from '../Components/ChatSection';
import PriceDetails from '../Components/PriceDetails';
import { useDispatch, useSelector } from 'react-redux';
import { formatPrice } from '../Components/formatter';

function CarDetail() {
    const dispatch = useDispatch();
    const carModel = useSelector((state) => state.carModel);
    const { id } = useParams();
    const [data, setData] = useState();
    const [number, setNumber] = useState(0);
    const [img, setImg] = useState('');
    const [showChat, setShowChat] = useState(false);
    const [showPrice, setShowPrice] = useState(false);
    const [carImg, setCarImg] = useState([]);
    const navigate = useNavigate();
    const [price, setPrice] = useState(0)

    const handleClick = () => {
        let action = {
            type: 'Cart',
            payload: data
        };
        dispatch(action);
        return navigate('/checkout')
    }
    useEffect(() => {
        setImg(carImg[number])
    }, [number, carImg])

    useEffect(() => {
        if(data) {
            setCarImg([data.image, comp1, comp2, comp3])
            setPrice(formatPrice(data.price))
        }
    }, [data])


    useEffect(() => {
        setData(carModel[id]);
    }, [carModel, id])

    const imgSlider = (title) => {

        if (title === 'Back') {
            if (number <= 0) {
                let index = 3;
                setNumber(index)
            }
            else {
                let index = number - 1;
                setNumber(index)
            }
        }
        else {
            if (number >= 3) {
                let index = 0;
                setNumber(index)
            }
            else {
                let index = number + 1;
                setNumber(index)
            }
        }
    }
    
    return (
        <div className='CarDetail'>
            <div className='left'>
                <img src={img} alt='' />
                <FaAngleLeft onClick={() => imgSlider('Back')} className='AngleLeft' />
                <FaAngleRight onClick={() => imgSlider('Forward')} className='AngleRight' />
            </div>
            <div className='right'>
                <span className='title'>{data && data.name}</span>
                <span className='desc'>{data && data.name} Long Range Dual Motor All-Wheel Drive</span>
                <div className='Speed'>
                    <div className='det'>
                        <span>341mi</span>
                        <span>Range (est.)</span>
                    </div>
                    <div className='det'>
                        <span>135mph</span>
                        <span>Top Speed</span>
                    </div>
                    <div className='det'>
                        <span>4.8sec</span>
                        <span>0-60 mph</span>
                    </div>
                </div>
                <span className='keyHeading'>Vehicle Details</span>
                <ul>
                    <li>New Vehicle</li>
                    <li>Less than 50 mile odometer</li>
                </ul>
                <span className='keyHeading'>Key Features</span>
                <ul>
                    <li>Red Multi-Coat Paint</li>
                    <li>20'' Induction Wheels</li>
                    <li>All Black Premium Interior</li>
                    <li>Autopilot</li>
                    <li>Seven Seat Interior</li>
                    <li>30-Day Premium Connectivity Trial</li>
                </ul>
                <span className='keyHeading'>Enhanced Autopilot</span>
                <span className='price'>$6,000</span>
                <ul>
                    <li>Navigate on Autopilot</li>
                    <li>Auto Lane Change</li>
                    <li>Autopark</li>
                    <li>Summon</li>
                    <li>Smart Summon</li>
                </ul>
                <div className='AddOn'>
                    <Button className='Blue' title='Add' />
                    <Button className='Gray' title='Feature Details' />
                </div>
                <span className='keyHeading'>Full Self-Driving Capability</span>
                <span className='price'>$15,000</span>
                <ul>
                    <li>All functionality of Basic Autopilot and Enhanced Autopilot</li>
                    <li>Traffic Light and Stop Sign Control</li>
                </ul>
                <span className='price coming'>Coming Soon</span>
                <ul>
                    <li>Autosteer on city streets</li>
                </ul>
                <p>The currently enabled features require active driver supervision and do not make the vehicle autonomous. The activation and use of these features are dependent on achieving reliability far in excess of human drivers as demonstrated by billions of miles of experience, as well as regulatory approval, which may take longer in some jurisdictions. As these self-driving features evolve, your car will be continuously upgraded through over-the-air software updates.</p>
                <div className='AddOn'>
                    <Button className='Blue' title='Add' />
                    <Button className='Gray' title='Feature Details' />
                </div>
                <span className='keyHeading'>Order Your {data && data.name}</span>
                <Button click={handleClick} className='payment' title='Continue to Payment' />
                <FaAngleDown className='AngleDown' />
            </div>
            <TbMessage onClick={() => setShowChat(!showChat)} className='Chat' />
            <div className='priceSection'>
                <FaAngleUp onClick={() => setShowPrice(!showPrice)} className='icon' />
                <span>{price} Vehicle Price</span>
                <span></span>
            </div>
            <ChatSection showChat={showChat} setShowChat={setShowChat} />
            <PriceDetails showPrice={showPrice} setShowPrice={setShowPrice} />
        </div>
    )
}

export default CarDetail;