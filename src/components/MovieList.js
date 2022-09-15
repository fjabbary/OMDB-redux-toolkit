import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import './MovieList.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderSettings } from '../settings';
import Slider from "react-slick";


function MovieList() {
    const movies = useSelector(state => state.movies.moviesResponse)

    return (
        <div>
            <h1 className="movies-header">Movies:</h1>
            <Slider {...sliderSettings} className="movies">
                {movies.Response === "True" ? movies.Search.map(movie => <MovieCard key={movie.imdbID} movie={movie} />) : null}
            </Slider>
        </div>
    )
}

export default MovieList