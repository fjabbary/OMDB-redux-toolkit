import React from 'react'
import './MovieCard.scss'
import { Link } from 'react-router-dom';

function ShowCard({ show }) {

    return (
        <div className="movie-card">
            <Link to={`/movie/${show.imdbID}`}>
                <div className="card-img">
                    <img src={show.Poster} alt={show.Title} />
                </div>
                <div className="card-desc">
                    <p>{show.Title}</p>
                    <p>{show.Year}</p>
                </div>
            </Link>
        </div>
    )
}

export default ShowCard