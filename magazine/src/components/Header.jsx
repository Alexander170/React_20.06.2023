import React from "react";
import {Link} from 'react-router-dom';
import pizzaLogo from "../assets/img/pizzaLogo.svg";
import cartPng from '../assets/img/cart.png';

function Header() {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
        <div className="header__logo">
          <img width="38" alt="Pizza logo" src={pizzaLogo} />
          <div>
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        </Link>
        <div className="header__cart">
          <Link to="/cart" className="button button--cart">
            <span>520 ₽</span>
            <div className="button__delimiter"></div>
            <img width='30' src={cartPng} alt="#" />
            <span>3</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
