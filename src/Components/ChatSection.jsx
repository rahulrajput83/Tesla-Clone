import React, { useEffect, useState } from 'react'
import './ChatSection.scss'
import Input from './Input';
import { MdClose } from 'react-icons/md'


function ChatSection(props) {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        if (props.showChat) {
            setTimeout(() => {
                setVisible(true)
            }, 1000);
        }
        else {
            setVisible(false)
        }
    }, [props, visible])
    return (
        <div className={`ChatSection ${props.showChat ? 'Display' : ''}`}>
            {props.showChat && visible ?
                <>
                    <span>Question Center</span>
                    <MdClose onClick={() => props.setShowChat(!props.showChat)} className='closeIcon' />
                    <span className='heading'>Chat With Us</span>
                    <span className='description'>Provide your information</span>
                    <Input className='InputField' title='First name' type='text' />
                    <Input className='InputField' title='Last name (Optional)' type='text' />
                    <Input className='InputField' title='Email address' type='email' />
                    <Input className='InputField' title='Phone' type='tel' />
                    <Input className='InputField' title='Zip Code' type='tel' />
                    <button>Start Chat</button>
                </>

                : ''}
        </div>
    )
}

export default ChatSection;