import React, { useState } from 'react';
import FilmInfo from './components/FilmInfo';
import PeopleInfo from './components/PeopleInfo';
import NavBar from './components/NavBar';

const App = () => {
    const [moreFilms, setDisplayFilms] = useState(false);
    const [morePeople, setDisplayPeople] = useState(false);

    const handleFilmsClick = () => {
        setDisplayFilms(true);

    }

    const handlePeopleClick = () => {
        setDisplayPeople(true);

    }

    if (moreFilms) {
        return (
            <div>
                <FilmInfo />
            </div>
        )
    } else if (morePeople) {
        return (
            <div>
                <PeopleInfo />
            </div>
        )

    } else {
        return (
            <>
                <NavBar />
                <div className="jumbotron jumbotron-fluid" id="firstImage">
                    <div className="container">
                        <h1 className="display-4">Spirited Away</h1>
                        <h5> Directed by <strong>Hayao Miyazaki</strong> </h5>
                        <h5> Released in <strong>2001</strong> · Rated <strong>PG</strong></h5>
                        <a className="btn btn-dark btn m-2" onClick={() => handleFilmsClick()}>More Films</a>
                        <a className="btn btn-secondary btn m-1" onClick={() => handlePeopleClick()}>See Characters</a>
                    </div>
                </div>

                <div className="container">
                    <h1 className="heading">Welcome to my make-believe IMBD</h1>
                    <p className="mainParagraph m-2 text-secondary p-3">The purpose of this page is to demonstrate my understanding of React and how to fetch data from REST API. Clicking the buttons above will fetch film and character data from Studio Ghibli. If you're curious about Studio Ghibli, click below. </p>
                </div>

                <div className="jumbotron jumbotron-fluid" id="secondImage">
                    <div className="container">
                        <div className="d-flex justify-content-center">
                            <a className="btn btn-dark btn d-flex align-items-center" id="bottomBtn" href="https://ghibliapi.herokuapp.com/" target="blank">Studio Ghibli</a>
                        </div>
                    </div>
                </div>

            </>
        )
    }
};

export default App;