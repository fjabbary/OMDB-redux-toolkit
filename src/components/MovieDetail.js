import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchSelectedMovie, clearSelected } from '../features/movieSlice'
import { useDispatch, useSelector } from 'react-redux';
import "./MovieDetail.scss"

function MovieDetail() {
    const dispatch = useDispatch();
    const { imdbID } = useParams();
    const movieDetail = useSelector(state => state.movies.selectedMovie)

    useEffect(() => {
        dispatch(fetchSelectedMovie(imdbID));

        return () => {
            dispatch(clearSelected())
        }

    }, [dispatch, imdbID])

    const { Title, Actors, Awards, imdbRating, imdbVotes, Year, Director, Language, Genre, Plot, Poster, Runtime, } = movieDetail;

    return (
        <div className="movie-detail">
            {movieDetail ? (
                <>
                    <div className="section-desc">
                        <h1>{Title}</h1>
                        <div className="movie-info-top">
                            <span>IMDB Rating <i className="fa fa-star"></i> : {imdbRating}</span>
                            <span>IMDB Votes <i className="fa fa-thumbs-up"></i> : {imdbVotes}</span>
                            <span>Runtime <i className="fa fa-film"></i> : {Runtime}</span>
                            <span>Year <i className="fa fa-calendar"></i> : {Year}</span>
                        </div>
                        <p className="plot">{Plot}</p>
                        <div className="movie-info-bottom">
                            <div className="row">
                                <div>Director</div>
                                <div>{Director}</div>
                            </div>
                            <div className="row">
                                <div>Stars</div>
                                <div>{Actors}</div>
                            </div>
                            <div className="row">
                                <div>Genres</div>
                                <div>{Genre}</div>
                            </div>
                            <div className="row">
                                <div>Languges</div>
                                <div>{Language}</div>
                            </div>
                            <div className="row">
                                <div>Awards</div>
                                <div>{Awards}</div>
                            </div>
                        </div>
                    </div>
                    <div className="section-poster">
                        <img src={Poster} alt={Title} />
                    </div>
                </>
            ) : <p>Loading...</p>}


        </div>
    )
}

export default MovieDetail