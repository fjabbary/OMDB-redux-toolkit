import React from 'react'
import './MovieCard.scss'
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {

    return (
        <div className="movie-card">
            <Link to={`/movie/${movie.imdbID}`}>
                <div className="card-img">
                    <img src={movie.Poster} alt={movie.Title} />
                </div>
                <div className="card-desc">
                    <p>{movie.Title}</p>
                    <p>{movie.Year}</p>
                </div>
            </Link>
        </div>
    )
}

export default MovieCard