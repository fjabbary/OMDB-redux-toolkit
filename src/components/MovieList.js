import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import './MovieList.scss';


function MovieList() {
    const movies = useSelector(state => state.movies.moviesResponse)

    return (
        <div>
            <h1 className="movies-header">Movies:</h1>
            <div className="movies">
                {movies.Response === "True" ? movies.Search.map(movie => <MovieCard key={movie.imdbID} movie={movie} />) : null}
            </div>
        </div>
    )
}

export default MovieList