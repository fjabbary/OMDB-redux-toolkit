import React from 'react';
import "./Header.scss";
import userImg from '../images/user.png'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header">
            <div className="logo"><Link to="/">OMDB Movie App</Link></div>
            <div className="search">
                <form>
                    <input type="text" placeholder="Search movie or show" />
                    <i className="fa fa-search"></i>
                </form>
            </div>
            <div className="user-img"><img src={userImg} alt="user" /></div>
        </div>
    )
}

export default Header