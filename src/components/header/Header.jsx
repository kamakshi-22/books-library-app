import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import logo from "../../assets/images/logo.png";
export const Header = () => {
    return (
        <div class="header">
            <Link to="/books-library-app" className="header__logo">
                <img src={logo} alt="logo" className="header__logo-img"/>
                <div className='header__logo-title'>
                    welcome to the library ˏˋ°•*⁀➷
                </div>
            </Link>
        </div>
    )
}
