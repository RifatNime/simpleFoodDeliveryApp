import { BarChart, SearchRounded, ShoppingCartRounded } from '@mui/icons-material'
import React, { useEffect } from 'react'
import './Header.css';
import logo from '../../image/logo.png';
import { useStateValue } from '../StateProvider/StateProvider';

function Header() {
  const [{ cart }, dispatch] = useStateValue();

  useEffect(() => {
    const toggleIcon = document.querySelector(".toggleMenu");
    toggleIcon.addEventListener("click", () => {
      document.querySelector(".rightMenu").classList.toggle("active");
    });
  }, []);
  return <header>
    <img src={logo} alt="" className='logo' />
    <div className="inputBox">
      <SearchRounded className='searchIcon'></SearchRounded>
      <input type='text' placeholder='Search'></input>
    </div>

    <div className="shoppingCart">
      <ShoppingCartRounded className="cart" />
      <div className={`${!cart ? "noCartItem" : "cart_content"}`}>
        <p>{cart ? cart.length : ""}</p>
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