import React from 'react'
import { useParams } from 'react-router-dom';
import './CarDetail.scss'

function CarDetail() {
    const {id} = useParams();
  return (
    <div className='CarDetail'>
        <div className='left'>hello</div>
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
            <span  className='keyHeading'>Key Features</span>
            <ul>
                <li>Red Multi-Coat Paint</li>
                <li>20'' Induction Wheels</li>
                <li>All Black Premium Interior</li>
                <li>Autopilot</li>
                <li>Seven Seat Interior</li>
                <li>30-Day Premium Connectivity Trial</li>
            </ul>
        </div>
    </div>
  )
}

export default CarDetail;