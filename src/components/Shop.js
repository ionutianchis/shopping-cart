import React from 'react'
import '../styles/shop.css'

const Shop = ({ cart, setCart, swords }) => {
    
    const addToCart = (item, index) => {
        swords[index].quantity = (swords[index].quantity || 0) + 1
        setCart([...cart.filter(x => x.name !== item.name),
            {
                image: item.image,
                name: item.name,
                price: item.price,
                quantity: swords[index].quantity
            }
        ])
    }
    return (
        <div className='shop'>
            {
                swords.map((item, index) => {
                    return (
                        <div key={index} className='sword-card'>
                            <div className='sword-image'>
                                <img src={require('../images/' + item.image + '.jpg').default} alt={item.name} />
                            </div>
                            <p>{item.name}</p>
                            <p>${item.price}</p>
                            <button type='button' className='add-to-cart-button' onClick={() => addToCart(item, index)}>Add to cart</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Shop