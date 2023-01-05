import React from 'react'
import { useParams } from 'react-router-dom';
import Button from '../Components/Button';
import './CarDetail.scss'
import img from './ModelX.jpg'

function CarDetail(props) {
    const { id } = useParams();
    return (
        <div className='CarDetail'>
            <div className='left'>
                <img src={img} alt='' />
            </div>
            <div className='right'>
                <span className='title'>Model Y</span>
                <span className='desc'>Model Y Long Range Dual Motor All-Wheel Drive</span>
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
                <span className='keyHeading'>Order Your Model Y</span>
                <Button className='payment' title='Continue to Payment' />
            </div>
        </div>
    )
}

export default CarDetail;