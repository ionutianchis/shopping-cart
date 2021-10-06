import React, { useState } from 'react'
import '../styles/navbar.css'
import { Link, useHistory } from 'react-router-dom'
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Navbar = ({ cart, setCart, swords }) => {
    const history = useHistory();

    const [modalIsOpen, setModalIsOpen] = useState(false)
    
    const calcTotal = () => {
        let total = cart.reduce((accumulator, current) => accumulator + current.price * current.quantity, 0);
        return total
    }
    
    const handleClick = (target) => {
        setCart([...cart.filter(x => x.name !== target.name)])
        for (let sword of swords) {
            if (sword.name === target.name) {
                sword.quantity = 0
            }
        }
    }
   
    const incrementQuantity = (item, index) => {
        for (let sword of swords) {
            if (item.name === sword.name) {
                sword.quantity = sword.quantity + 1
            }
        }
        cart[index] = { ...cart[index], quantity: item.quantity + 1}
        setCart([...cart])
    }
    
    const decrementQuantity = (item, index) => {
        for (let sword of swords) {
            if (item.name === sword.name) {
                sword.quantity = sword.quantity - 1
            }
        }
        cart[index] = { ...cart[index], quantity: item.quantity - 1}
        setCart([...cart])
        if (item.quantity < 2) {
            setCart([...cart.filter(x => x.name !== item.name)])
        }
    }
    console.log(swords)
    return (
        <nav>
            <h1 onClick={() => history.push('/')}>Blackbeard's forge</h1>
            
            <ul className='nav-list'>
                <Link to='/home' className='nav-link styled-link'>
                    <li>Home</li>
                </Link>
                    
                <Link to='/shop' className='nav-link styled-link'>
                    <li>Shop</li>
                </Link>
                    
                <Link to='/contact' className='nav-link styled-link'>
                    <li>Contact</li>
                </Link>

                <div className='shopping-div'>
                    <button type='button' onClick={() => setModalIsOpen(true)}>
                    <p>{cart.length}</p>
                    </button>
                </div>
            </ul>
            <Modal
                isOpen={modalIsOpen}
                closeTimeoutMS={500}
                onRequestClose={() => setModalIsOpen(false)}
                className="modal"
                overlayClassName="overlay"
            >
                <h1>Shopping basket</h1>

                <div className='basket-container'>
                    {
                        cart.map((item, index) => {
                            calcTotal()
                            return (
                                <div key={index} className='basket-item'>
                                
                                    <div className='basket-item-image'>
                                        <img src={require('../images/' + item.image + '.jpg').default} alt={item.name} />
                                    </div>
                                
                                    <h3>{item.name}</h3>
                                
                                    <p>${item.price * item.quantity}</p>
                                
                                    <button type='button' className='basket-delete-button' onClick={() => handleClick(item)}></button>
                                    
                                    <div className='change-quantity-div'>
                                        <button type='button' className='change-quantity-button' onClick={() => decrementQuantity(item, index)}>-</button>
                                        <p>{item.quantity}</p>
                                        <button type='button' className='change-quantity-button' onClick={() => incrementQuantity(item, index)}>+</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <p>Total : ${calcTotal()}</p>
                    <div className='basket-button-div'>
                        <button type='button' className='basket-order-button'>Order now !</button>
                    </div>
                </div>
            </Modal>
        </nav>
    )
}

export default Navbar
