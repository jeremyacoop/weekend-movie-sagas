import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function MovieDetails() {

    const params = useParams();
    const dispatch = useDispatch();
    const [movie, setMovie] = useState(null);
    // movie = useSelector(store => store.movies);

    useEffect(() => {
        axios.get(`/details/${params.id}`)
        .then(res => {
            setMovie(res.data);
            dispatch({
                type: 'SET_ACTIVE_MOVIE',
                payload: res.data
            })
        })
        .catch(err => {
            console.error(err);
        })
    }, [params.id]);

    console.log(movie);

    return (
        <main>
            <h1>Movie Details</h1>
            <section className="movie-details">
                <div>
                    <img src={params.poster} alt={params.title} />
                </div>
                <div>Testing123
                    {params.title}
                </div>
                <div>
                    {params.description}
                </div>
            </section>
        </main>

    );
}

export default MovieDetails;
