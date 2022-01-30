import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function MovieDetails() {

    const dispatch = useDispatch();
    const movie = useSelector(store => store.movies);

    // useEffect(() => {
    //     dispatch({ type: 'FETCH_MOVIES' });
    // }, []);

    const fetchDetails = () => {

    }

    return (
        <main>
            <h1>Movie Details</h1>
            <section className="movies">
            </section>
        </main>

    );
}

export default MovieDetails;
