import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Header.css";
import main_logo from "../../Assets/img1.jpg";
import { NavLink } from "react-router-dom";
import { useState } from "../StateProvider/Stateprovider";

function Header() {
  const [{ basket, user }, dispatch] = useState();

  return (
    <div className="header">
      <NavLink to="/">
        <img className="header__logo" src={main_logo} alt="" />
      </NavLink>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest madhviii</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Returnss</span>
          <span className="header__optionLineTwo">& Orderss</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <NavLink to="/checkout">
          <div className="header__optionBasket">
            <ShoppingCartIcon />
            cart
            <span className="header__optionLineTwo header__basketCount">0</span>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
