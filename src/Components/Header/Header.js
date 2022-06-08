import { BarChart, SearchRounded, ShoppingCartRounded } from '@mui/icons-material'
import React from 'react'
import './Header.css';
import logo from '../../image/logo.png';

function Header() {
  return <header>
    <img src={logo} alt="" className='logo'/>
    <div className="inputBox">
      <SearchRounded className='searchIcon'></SearchRounded>
      <input type='text' placeholder='Search'></input>
    </div>

    <div className="shoppingCart">

      <ShoppingCartRounded className='cart' />
      <div className='cart_content'>
        <p>2 </p>
      </div>
    </div>

    <div className="profileContainer">
      <div className="imgBox">
        <img
          src="https://i0.wp.com/buzz4fun.net/wp-content/uploads/2020/06/Julius-Pringles.jpg?fit=760%2C500&ssl=1"
          alt=""
        />
      </div>
      <h2 className="userName">Rifat Naeem</h2>
    </div>

    <div className="toggleMenu">
      <BarChart className="toggleIcon" />
    </div>
  </header>
}

export default Header