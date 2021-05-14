import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';


const FilmInfo = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await fetch("https://ghibliapi.herokuapp.com/films");
            const allFilms = await res.json();
            setFilms(allFilms);
        })();

    }, [])


    return (
        <>
            <NavBar />
            <div className='container'>
                <div className="row">
                    {films.map(films => (
                        <div className="col-6 d-flex align-items-stretch"  key={films.id}>
                            <div className="card-group">
                            <div className="card shadow m-1">
                                    <div className="card-body">
                                        <h3 className="card-title">{films.title}</h3>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item"><em className="text-secondary">Produced by</em> {films.producer}</li>
                                            <li className="list-group-item"><em className="text-secondary">Directed by</em> {films.director}</li>
                                            <li className="list-group-item"><em className="text-secondary">Relased in</em> {films.release_date}</li>
                                            <li className="list-group-item"><em className="text-secondary" >Rotten Tomato Score</em> {films.rt_score}</li>
                                            <li className="list-group-item">{films.description}</li>
                                            
                                        </ul>
                                        <a class="btn btn-link mt-2" href={films.url} role="button">Learn more</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>

    )
}

export default FilmInfo;