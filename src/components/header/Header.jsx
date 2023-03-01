import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import logo from "../../assets/images/logo.png";
export const Header = () => {
    return (
        <div class="header">
            <Link to="/" className="header__logo">
                <img src={logo} alt="logo" className="header__logo-img"/>
                <div className='header__logo-title'>Books Library</div>
            </Link>
        </div>
    )
}
