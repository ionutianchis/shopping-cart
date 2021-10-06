import React from 'react'
import '../styles/home.css'
import {useHistory} from 'react-router-dom'

const Home = () => {
    const history = useHistory();

    return (
        <div className='home'>
            <div className='home-picture' />
            <div className='home-description'>
                <p>Finest craftsmanship in all kingdoms known to man.</p>

                <p>Get your own hand-crafted sword before some pesky traveler buys all our stock (again).</p>
            
                <button type='button' className='order-button' onClick={() => history.push("/shop")}>Browse our wares</button>
            </div>
        </div>
    )
}

export default Home