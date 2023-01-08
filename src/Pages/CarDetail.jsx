import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Button from '../Components/Button';
import './CarDetail.scss'
import { FaAngleDown, FaAngleLeft, FaAngleRight, FaAngleUp } from 'react-icons/fa'
import comp1 from '../Images/compositor1.jpg';
import comp2 from '../Images/compositor2.jpg';
import comp3 from '../Images/compositor3.jpg'
import { TbMessage } from 'react-icons/tb'
import ChatSection from '../Components/ChatSection';
import PriceDetails from '../Components/PriceDetails';

const carImg = [comp1, comp2, comp3]

function CarDetail(props) {
    const { id } = useParams();
    const [data, setData] = useState();
    const [number, setNumber] = useState(0);
    const [img, setImg] = useState('');
    const [showChat, setShowChat] = useState(false);
    const [showPrice, setShowPrice] = useState(false); 

    useEffect(() => {
        setImg(carImg[number])
    }, [number])

    useEffect(() => {
        setData(props.carModel[id])
    }, [props, id])

    const imgSlider = (title) => {

        if (title === 'Back') {
            if (number <= 0) {
                let index = 2;
                setNumber(index)
            }
            else {
                let index = number - 1;
                setNumber(index)
            }
        }
        else {
            if (number >= 2) {
                let index = 0;
                setNumber(index)
            }
            else {
                let index = number + 1;
                setNumber(index)
            }
        }
    }
    useEffect(() => {
        console.log(number)
    }, [number])
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
                <Button className='payment' title='Continue to Payment' />
                <FaAngleDown className='AngleDown' />
            </div>
            <TbMessage onClick={() => setShowChat(!showChat)} className='Chat' />
            <div className='priceSection'>
                <FaAngleUp onClick={() => setShowPrice(!showPrice)} className='icon' />
                <span>$72,990 Vehicle Price</span>
                <span>$65,190 After potential savings</span>
            </div>
            <ChatSection showChat={showChat} setShowChat={setShowChat} />
            <PriceDetails showPrice={showPrice} setShowPrice={setShowPrice} />
        </div>
    )
}

export default CarDetail;