import React from 'react'
import { NavLink, Outlet } from 'react-router'
import "./Layouts.css"

function MainLayouts() {
    return (
        <div>
            <nav>
                <div className="logo">
                    <img src="https://preview.colorlib.com/theme/aroma/img/logo.png" alt="" />
                </div>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/basket">Basket</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop">Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop">Pages</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/wishlist">wishlist</NavLink>
                    </li>
                </ul>
                <button>Buy Now</button>
            </nav>

            <Outlet />
            <footer>
                <div className="footer">
                    <p>Copyright ©2025 All rights reserved | This template is made with  by Colorlib</p>
                </div>
            </footer>
        </div>
    )
}

export default MainLayouts
