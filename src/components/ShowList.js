import React from 'react';
import { useSelector } from 'react-redux';
import ShowCard from './ShowCard';
import './MovieList.scss';

function ShowList() {
    const shows = useSelector(state => state.movies.showsResponse)

    return (
        <div>
            <h1 className="movies-header">Shows:</h1>
            <div className="movies">
                {shows.Response === "True" ? shows.Search.map(show => <ShowCard key={show.imdbID} show={show} />) : null}
            </div>
        </div>
    )
}

export default ShowList