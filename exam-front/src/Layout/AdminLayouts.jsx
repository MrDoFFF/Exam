import React from 'react'
import { NavLink, Outlet } from 'react-router'

function AdminLayouts() {
  return (
    <div>
        <nav>
                <div className="logo">
                    <img src="https://preview.colorlib.com/theme/aroma/img/logo.png" alt="" />
                </div>
                <ul>
                    <li>
                        <NavLink to="/adminpage">Admin Table</NavLink>
                    </li>
                    <li>
                        <NavLink to="/addpages">Add Product</NavLink>
                    </li>
                   
                </ul>
                <button>Buy Now</button>
            </nav>

            <Outlet/>
            <footer>
                <div className="footer">
                    <p>Copyright ©2025 All rights reserved | This template is made with  by Colorlib</p>
                </div>
            </footer>
    </div>
  )
}

export default AdminLayouts
