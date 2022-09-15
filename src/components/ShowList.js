import React from 'react';
import { useSelector } from 'react-redux';
import ShowCard from './ShowCard';
import './MovieList.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderSettings } from '../settings';
import Slider from "react-slick";

function ShowList() {
    const shows = useSelector(state => state.movies.showsResponse)

    return (
        <div>
            <h1 className="movies-header">Shows:</h1>
            <Slider {...sliderSettings} className="shows">
                {shows.Response === "True" ? shows.Search.map(show => <ShowCard key={show.imdbID} show={show} />) : null}
            </Slider>
        </div>
    )
}

export default ShowList