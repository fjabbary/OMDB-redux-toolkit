import React, { useState } from 'react';
import "./Header.scss";
import userImg from '../images/user.png'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { searchAllMovies, searchAllShows } from '../features/movieSlice'

function Header() {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(searchAllMovies(query))
        dispatch(searchAllShows(query))
    }

    return (
        <div className="header">
            <div className="logo"><Link to="/">OMDB Movie App</Link></div>
            <div className="search">
                <form onSubmit={submitHandler}>
                    <input type="text" placeholder="Search movie or show" value={query} onChange={e => setQuery(e.target.value)} />
                    <button type="submit"><i className="fa fa-search"></i></button>
                </form>
            </div>
            <div className="user-img"><img src={userImg} alt="user" /></div>
        </div >
    )
}

export default Header