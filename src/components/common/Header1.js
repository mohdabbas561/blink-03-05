import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import compareImg from "../../icons/compare.svg"
import wishlistImg from "../../icons/wishlist.svg"
import userImg from "../../icons/user.svg"
import cartImg from "../../icons/cart.svg"

import "./newheaderpre.css"
import "./newheader.css"
const Header1 = () => {
    return (
        <>

        <header>



<div className="header-main header-upper" >

  <div className="container" >


                   {/* <div className="header-search-container ">
                            <div className="search-wrapper d-none d-lg-block">
                                <div className="input-group ">
                                    <input type="text" className="form-control py-1 searchBar" placeholder="Search product here" aria-label="Search product here" aria-describedby="basic-addon2" />
                                    <span className="input-group-text p-3 searchBar-icon" id="basic-addon2"><BsSearch className='fs-6' /></span>
                                </div>
                            </div>
                        </div> */}

    <div className="header-user-actions">


    <div className="header-upper-links d-flex align-items-center justify-content-end gap-3 header-user-actions">

                                <div className="single-icon ">
                                    <Link to="compare-products" className='d-flex align-items-center text-white gap-10'>
                                        <img className="img-fluid" src={compareImg} alt="" />
                                        <p className='d-none d-xl-block mb-0 header-upper-text'>Compare <br /> Products</p>
                                    </Link>
                                </div>
                                <div className="single-icon px-2">
                                    <Link to="wishlist" className='d-flex align-items-center text-white gap-10'>
                                        <img className="img-fluid" src={wishlistImg} alt="wishlist" />
                                        <p className='d-none d-xl-block mb-0 header-upper-text'>Favourite <br /> Wishlist</p>
                                    </Link>
                                </div>
                                <div className="single-icon px-2">
                                    <Link to="login" className='d-flex align-items-center text-white gap-10'>
                                        <img className="img-fluid" src={userImg} alt="user" />
                                        <p className='d-none d-xl-block mb-0 header-upper-text'>Login <br /> My Account</p>
                                    </Link>
                                </div>
                                <div className="single-icon px-2">
                                    <Link to="/cart" className='d-flex align-items-center text-white gap-10'>
                                        <img className="img-fluid" src={cartImg} alt="cart" />
                                        <div className='d-none d-xl-block d-flex flex-column gap-10 justify-content-center'>
                                            <span className="d-block badge bg-white text-dark fs-xsm fw-normal rounded-pill mb-1">0</span>
                                            <p className='mb-0 header-upper-text'>₹500</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>





    </div>

  </div>

</div>

<nav className="desktop-navigation-menu" >

  <div className="container">

    <ul className="desktop-menu-category-list">

      <li className="menu-category">
      <NavLink to="/" className="menu-title">
        Home</NavLink>
      </li>

      <li className="menu-category">
        <a href="#" className="menu-title">Categories</a>

        <div className="dropdown-panel">

          <ul className="dropdown-panel-list">

            <li className="menu-title">
              <a href="#">Large Appliances</a>
            </li>

            <li className="panel-list-item">
              <a href="#">Desktop</a>
            </li>

            <li className="panel-list-item">
              <a href="#">Laptop</a>
            </li>

            <li className="panel-list-item">
              <a href="#">Camera</a>
            </li>

            <li className="panel-list-item">
              <a href="#">Tablet</a>
            </li>

            <li className="panel-list-item">
              <a href="#">Headphone</a>
            </li>

            <li className="panel-list-item">
              <a href="#">

              </a>
            </li>

            

          </ul>
          

          {/* <ul className="dropdown-panel-list">

            <li className="menu-title">
              <a href="#">Men's</a>
            </li>

            <li className="panel-list-item">
              <a href="#">Formal</a>
            </li>

            <li className="panel-list-item">
              <a href="#">Casual</a>
            </li>

            <li className="panel-list-item">
              <a href="#">Sports</a>
            </li>

            <li className="panel-list-item">
              <a href="#">Jacket</a>
            </li>

            <li className="panel-list-item">
              <a href="#">Sunglasses</a>
            </li>

            <li className="panel-list-item">
              <a href="#">
                <img src="./assets/images/mens-banner.jpg" alt="men's fashion" width="250" height="119"/>
              </a>
            </li>

          </ul>

          <ul className="dropdown-panel-list">

            <li className="menu-title">
              <a href="#">Women's</a>
            </li>

            <li className="panel-list-item">
              <a href="#">Formal</a>
            </li>

            <li className="panel-list-item">
              <a href="#">Casual</a>
            </li>

            <li className="panel-list-item">
              <a href="#">Perfume</a>
            </li>

            <li className="panel-list-item">
              <a href="#">Cosmetics</a>
            </li>

            <li className="panel-list-item">
              <a href="#">Bags</a>
            </li>

            <li className="panel-list-item">
              <a href="#">
                <img src="./assets/images/womens-banner.jpg" alt="women's fashion" width="250" height="119"/>
              </a>
            </li>

          </ul> */}

          <ul className="dropdown-panel-list">

            <li className="menu-title">
              <a href="#">Home Appliances</a>
            </li>

            <li className="panel-list-item">
              <a href="#">Smart Watch</a>
            </li>

            <li className="panel-list-item">
              <a href="#">Smart TV</a>
            </li>

            <li className="panel-list-item">
              <a href="#">Keyboard</a>
            </li>

            <li className="panel-list-item">
              <a href="#">Mouse</a>
            </li>

            <li className="panel-list-item">
              <a href="#">Microphone</a>
            </li>

            <li className="panel-list-item">
              <a href="#">

              </a>
            </li>

          </ul>

        </div>
      </li>

      {/* <li className="menu-category">
        <a href="#" className="menu-title">Men's</a>

        <ul className="dropdown-list">

          <li className="dropdown-item">
            <a href="#">Shirt</a>
          </li>

          <li className="dropdown-item">
            <a href="#">Shorts & Jeans</a>
          </li>

          <li className="dropdown-item">
            <a href="#">Safety Shoes</a>
          </li>

          <li className="dropdown-item">
            <a href="#">Wallet</a>
          </li>

        </ul>
      </li>

      <li className="menu-category">
        <a href="#" className="menu-title">Women's</a>

        <ul className="dropdown-list">

          <li className="dropdown-item">
            <a href="#">Dress & Frock</a>
          </li>

          <li className="dropdown-item">
            <a href="#">Earrings</a>
          </li>

          <li className="dropdown-item">
            <a href="#">Necklace</a>
          </li>

          <li className="dropdown-item">
            <a href="#">Makeup Kit</a>
          </li>

        </ul>
      </li>*/}

      <li className="menu-category"><NavLink to="/products" className="menu-title">Our Products</NavLink></li>
      <li className="menu-category">
        <a href="#" className="menu-title">About Us</a>

        {/* <ul className="dropdown-list">

          <li className="dropdown-item">
            <a href="#">Blinken</a>
          </li>

          <li className="dropdown-item">
            <a href="#">LG</a>
          </li>

        </ul> */}
      </li>

      <li className="menu-category">
        <a href="#" className="menu-title">Contact Us</a>

        {/* <ul className="dropdown-list">

          <li className="dropdown-item">
            <a href="#">Bajaj</a>
          </li>

        </ul> */}
      </li>

      <li className="menu-category">
        <a href="#" className="menu-title">Customer Support</a>
      </li>

      <li className="menu-category">
        <a href="#" className="menu-title">Careers</a>
      </li>

    </ul>

  </div>

</nav>

<div className="mobile-bottom-navigation">

  <button className="action-btn" data-mobile-menu-open-btn>
    <ion-icon name="menu-outline"></ion-icon>
  </button>

  <button className="action-btn">
    <ion-icon name="bag-handle-outline"></ion-icon>

    <span className="count">0</span>
  </button>

  <button className="action-btn">
    <ion-icon name="home-outline"></ion-icon>
  </button>

  <button className="action-btn">
    <ion-icon name="heart-outline"></ion-icon>

    <span className="count">0</span>
  </button>

  <button className="action-btn" data-mobile-menu-open-btn>
    <ion-icon name="grid-outline"></ion-icon>
  </button>

</div>

<nav className="mobile-navigation-menu  has-scrollbar" data-mobile-menu>

  <div className="menu-top">
    <h2 className="menu-title">Menu</h2>

    <button className="menu-close-btn" data-mobile-menu-close-btn>
      <ion-icon name="close-outline"></ion-icon>
    </button>
  </div>

  <ul className="mobile-menu-category-list">

    <li className="menu-category">
      <a href="#" className="menu-title">Home</a>
    </li>

    <li className="menu-category">

      <button className="accordion-menu" data-accordion-btn>
        <p className="menu-title">Men's</p>

        <div>
          <ion-icon name="add-outline" className="add-icon"></ion-icon>
          <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
        </div>
      </button>

      <ul className="submenu-category-list" data-accordion>

        <li className="submenu-category">
          <a href="#" className="submenu-title">Shirt</a>
        </li>

        <li className="submenu-category">
          <a href="#" className="submenu-title">Shorts & Jeans</a>
        </li>

        <li className="submenu-category">
          <a href="#" className="submenu-title">Safety Shoes</a>
        </li>

        <li className="submenu-category">
          <a href="#" className="submenu-title">Wallet</a>
        </li>

      </ul>

    </li>

    <li className="menu-category">

      <button className="accordion-menu" data-accordion-btn>
        <p className="menu-title">Women's</p>

        <div>
          <ion-icon name="add-outline" className="add-icon"></ion-icon>
          <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
        </div>
      </button>

      <ul className="submenu-category-list" data-accordion>

        <li className="submenu-category">
          <a href="#" className="submenu-title">Dress & Frock</a>
        </li>

        <li className="submenu-category">
          <a href="#" className="submenu-title">Earrings</a>
        </li>

        <li className="submenu-category">
          <a href="#" className="submenu-title">Necklace</a>
        </li>

        <li className="submenu-category">
          <a href="#" className="submenu-title">Makeup Kit</a>
        </li>

      </ul>

    </li>

    <li className="menu-category">

      <button className="accordion-menu" data-accordion-btn>
        <p className="menu-title">Jewelry</p>

        <div>
          <ion-icon name="add-outline" className="add-icon"></ion-icon>
          <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
        </div>
      </button>

      <ul className="submenu-category-list" data-accordion>

        <li className="submenu-category">
          <a href="#" className="submenu-title">Earrings</a>
        </li>

        <li className="submenu-category">
          <a href="#" className="submenu-title">Couple Rings</a>
        </li>

        <li className="submenu-category">
          <a href="#" className="submenu-title">Necklace</a>
        </li>

        <li className="submenu-category">
          <a href="#" className="submenu-title">Bracelets</a>
        </li>

      </ul>

    </li>

    <li className="menu-category">

      <button className="accordion-menu" data-accordion-btn>
        <p className="menu-title">Perfume</p>

        <div>
          <ion-icon name="add-outline" className="add-icon"></ion-icon>
          <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
        </div>
      </button>

      <ul className="submenu-category-list" data-accordion>

        <li className="submenu-category">
          <a href="#" className="submenu-title">Clothes Perfume</a>
        </li>

        <li className="submenu-category">
          <a href="#" className="submenu-title">Deodorant</a>
        </li>

        <li className="submenu-category">
          <a href="#" className="submenu-title">Flower Fragrance</a>
        </li>

        <li className="submenu-category">
          <a href="#" className="submenu-title">Air Freshener</a>
        </li>

      </ul>

    </li>

    <li className="menu-category">
      <a href="#" className="menu-title">Blog</a>
    </li>

    <li className="menu-category">
      <a href="#" className="menu-title">Hot Offers</a>
    </li>

  </ul>

  <div className="menu-bottom">

    <ul className="menu-category-list">

      <li className="menu-category">

        <button className="accordion-menu" data-accordion-btn>
          <p className="menu-title">Language</p>

          <ion-icon name="caret-back-outline" className="caret-back"></ion-icon>
        </button>

        <ul className="submenu-category-list" data-accordion>

          <li className="submenu-category">
            <a href="#" className="submenu-title">English</a>
          </li>

          <li className="submenu-category">
            <a href="#" className="submenu-title">Espa&ntilde;ol</a>
          </li>

          <li className="submenu-category">
            <a href="#" className="submenu-title">Fren&ccedil;h</a>
          </li>

        </ul>

      </li>

      <li className="menu-category">
        <button className="accordion-menu" data-accordion-btn>
          <p className="menu-title">Currency</p>
          <ion-icon name="caret-back-outline" className="caret-back"></ion-icon>
        </button>

        <ul className="submenu-category-list" data-accordion>
          <li className="submenu-category">
            <a href="#" className="submenu-title">USD &dollar;</a>
          </li>

          <li className="submenu-category">
            <a href="#" className="submenu-title">EUR &euro;</a>
          </li>
        </ul>
      </li>

    </ul>

    <ul className="menu-social-container">

      <li>
        <a href="#" className="social-link">
          <ion-icon name="logo-facebook"></ion-icon>
        </a>
      </li>

      <li>
        <a href="#" className="social-link">
          <ion-icon name="logo-twitter"></ion-icon>
        </a>
      </li>

      <li>
        <a href="#" className="social-link">
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
      </li>

      <li>
        <a href="#" className="social-link">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
      </li>

    </ul>

  </div>

</nav>

</header>
        </>
    )
}

export default Header1