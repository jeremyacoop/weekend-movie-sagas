import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function MovieDetails() {

    const params = useParams();
    const dispatch = useDispatch();
    // const [movie, setMovie] = useState(null);
    const movie = useSelector(store => store.movies);

    useEffect(() => {
        // axios.get(`/details/${params.id}`)
        // .then(res => {
            // setMovie(params.id);
            dispatch({
                type: 'FETCH_ACTIVE_MOVIE',
                payload: params.id
            });
        // })
        // .catch(err => {
            // console.error(err);
        // })
    }, [params.id]);

    console.log(params);

    return (
        <main>
            <h1>Movie Details</h1>
            <section className="movie-details">
                <div>
                    <img src={params.poster} alt={movie.title} />
                </div>
                <div>Testing123
                    {movie.title}
                </div>
                <div>
                    {movie.description}
                </div>
            </section>
        </main>

    );
}

export default MovieDetails;
