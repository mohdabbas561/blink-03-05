import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../LOGO Blinken.png";
import '../../Logo.css';
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { dropdownMenu } from "../../data/headerData";
import commonContext from "../../contexts/common/commonContext";
import cartContext from "../../contexts/cart/cartContext";
import AccountForm from "../form/AccountForm";
import SearchBar from "./SearchBar";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebaseconfig from '../../firebaseconfig';

const Header = () => {
  const { formUserInfo, toggleForm, toggleSearch } = useContext(commonContext);
  const { cartItems } = useContext(cartContext);
  const [isSticky, setIsSticky] = useState(false);
  const [user, setUser] = useState(null);

  // handle the sticky-header
  useEffect(() => {
    const handleIsSticky = () =>
      window.scrollY >= 50 ? setIsSticky(true) : setIsSticky(false);

    window.addEventListener("scroll", handleIsSticky);

    return () => {
      window.removeEventListener("scroll", handleIsSticky);
    };
  }, [isSticky]);

  useEffect(() => {
    // Set up Firebase authentication listener
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });

    // Clean up Firebase authentication listener
    return () => {
      unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      setUser(null);
    } catch (error) {
      console.error(error);

    }
  };

  const cartQuantity = cartItems.length;

  return (
    <>
      <header id="header" className={isSticky ? "sticky" : ""}>
        <div style={{marginBottom: "0px"}} className="container">
          <div className="navbar">
            
              <Link to="/">
                <img className="logo_head" src={logo} alt="Logo" />
              </Link>
            
            
            <nav className="nav_actions">
              <div className="search_action">
                <span onClick={() => toggleSearch(true)}>
                  <AiOutlineSearch color={'black'} />
                </span>
                <div className="tooltip">Search</div>
              </div>

              <div className="cart_action">
                <Link to="/cart">
                  <AiOutlineShoppingCart color={'black'} />
                  {cartQuantity > 0 && (
                    <span className="badge">{cartQuantity}</span>
                  )}
                </Link>
                <div className="tooltip">Cart</div>
              </div>

              <div className="user_action">
      <span>
        <AiOutlineUser color={'black'} />
      </span>
      <div className="dropdown_menu">
        <h4>
          Hello!{' '}
          {user && (
            <Link to="*">&nbsp;{user.displayName || user.email}</Link>
          )}
        </h4>
        <p>Access account and manage orders</p>
        {user ? (
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <button type="button" onClick={() => toggleForm(true)}>
                     Login / Signup
          </button>
        )}
        <div className="separator"></div>
        <ul>
          {dropdownMenu.map((item) => {
            const { id, link, path } = item;
            return (
              <li key={id}>
                <Link to={path}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <SearchBar />
      <AccountForm />
    </>
  );
};

export default Header;