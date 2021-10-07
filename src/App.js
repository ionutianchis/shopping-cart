import React, {useState}from 'react'
import './styles/App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Shop from './components/Shop'
import Contact from './components/Contact'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

const App = () => {
  const [swords] = useState([

    {
      name: "Templar Knight Sword",
      image: 'templar',
      price: 299.99,
    },
    {
      name: 'Hamingja',
      price: 179.99,
      image: 'hamingja',
    },
    {
      name: 'Long Sword',
      price: 129.99,
      image: 'longsword',
    },
    {
      name: 'Viking Sword',
      price: 124.99,
      image: 'viking',
    },
    {
      name: "Geralt's Steel Sword",
      price: 149.99,
      image: 'steel',
    },
    {
      name: "Geralt's Silver Sword",
      price: 199.99,
      image: 'silver',
    },
    {
      name: "Ned Stark's Sword, Ice",
      price: 499.99,
      image: 'ice',
    },
    {
      name: "Jon Snow's Sword, Longclaw",
      price: 399.99,
      image: 'longclaw',
    },
    {
      name: "Brienne's Sword, Oathkeeper",
      price: 449.99,
      image: 'oathkeeper',
    },
  ])

  const [cart, setCart] = useState([])

  return (
    <div className='container'>
        <BrowserRouter basename={window.location.pathname || ''}>
        
        <Navbar cart={cart} setCart={setCart} swords={swords}/>
        
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/shop' render={() => <Shop swords={swords} cart={cart} setCart={setCart} />}/>
          <Route exact path='/contact' component={Contact}/>
        </Switch>
        
        </BrowserRouter>
    </div>
  );
}

export default App;
