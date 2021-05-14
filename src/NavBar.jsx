import React from 'react';

const NavBar = () => {

    const handleReset = () => {
        window.location.reload();
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" onClick={() => handleReset()} id="home"><img src="home.svg"></img></a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search films, etc..." aria-label="Search"></input>
                        <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    )

}

export default NavBar; 