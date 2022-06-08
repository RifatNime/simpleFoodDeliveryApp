import { BarChart, SearchRounded, ShoppingCartRounded } from '@mui/icons-material'
import React from 'react'
import './Header.css';

function Header() {
  return <header>
    <img src="" alt="" />
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
          src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fprofile.jpg?alt=media&token=36821495-39b9-4145-bde3-16c47c6ff937"
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