import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';

const PeopleInfo = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await fetch("https://ghibliapi.herokuapp.com/people");
            const allPeople = await res.json();
            setPeople(allPeople);
        })();

    }, [])


    return (
        <>
            <NavBar />
            <div className='container'>
                <div className="row">
                    {people.map(people => (
                        <div className="col-6" key={people.id}>
                            <div className="card-group">
                                <div className="card shadow m-1" >
                                    <div className="card-body">
                                        <h3 className="card-title">{people.name}</h3>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item"><em className="text-secondary">Age</em> {people.age}</li>
                                            <li className="list-group-item"><em className="text-secondary">Gender</em> {people.gender}</li>
                                            <li className="list-group-item"><em className="text-secondary">Eye Color</em> {people.eye_color}</li>
                                            <li className="list-group-item"><em className="text-secondary">Hair Color</em> {people.hair_color}</li>
                                            
                                        </ul>
                                        <a class="btn btn-link mt-2" href={people.url} role="button">Learn more</a>
                    
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

export default PeopleInfo;