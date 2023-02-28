import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div class="header">
            <Link to="/" class="header__logo">logo</Link>
            <div class="header__nav">
                <Link to="/about" class="nav__item">About</Link>
                <Link to="/contact" class="nav__item">Contact</Link>
            </div>
        </div>
    )
}
