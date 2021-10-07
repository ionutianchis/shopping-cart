import React from 'react'
import '../styles/about.css'

const Contact = () => {

  const handleClick = () => {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  };

    return (
        <div className='contact'>
            <h2>Yes, we have socials (believe it or not),</h2>
            <div className='contact-buttons'>
                <button className='contact-button fb-button' onClick={handleClick} />
                <button className='contact-button ig-button' onClick={handleClick} />
                <button className='contact-button twitter-button' onClick={handleClick} />
            </div>
            <div className='contact-description'>
                <h2>29 Stable's Street, Rothenburg</h2>
                <p>Stop by and have a friendly chat with us by the hearth, after which we offer you a choice: either you buy, or else...</p>
            </div>
        </div>
    )
}

export default Contact
