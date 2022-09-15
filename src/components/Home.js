import React, { useEffect } from 'react';
import MovieList from './MovieList'
import ShowList from './ShowList'
import "./Home.scss";

import { useDispatch } from 'react-redux'
import { fetchAllMovies, fetchAllShows } from '../features/movieSlice'

function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllMovies())
        dispatch(fetchAllShows())
    }, [dispatch])
    return (
        <div className="home">
            <MovieList />
            <br /><br />
            <ShowList />
        </div>
    )
}

export default Home