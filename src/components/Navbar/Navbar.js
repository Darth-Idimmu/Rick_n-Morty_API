import React from 'react';
import '../../App.css'; //otra forma de hacer estilos en jsx
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    const navback = {
        backgroundImage: "radial-gradient(circle, rgba(255, 132, 116, 1) 0%, rgba(34,25,51,1) 100%)",
    }
    const titlespan = {
        color: '#00b0c8',
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5" style={navback}> {/*color homenaje a Vest*/}
                <div className="container">
                    <Link to="/" className="fs-3 navbar-brand fw-bolder">
                        <span style={titlespan}>Rick & Morty </span>
                        <span style={{ color: '#cdd845' }}>
                            Search</span>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <style jsx>
                            {`
                            button[aria-expanded="false"] > .close{
                                display: none;
                            }
                            button[aria-expanded="true"] > .open{
                                display: none;
                            }
                            `}
                        </style>
                        <FaChevronDown className='open' />
                        <FaChevronUp className='close' />
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav fs-5">
                            <NavLink to="/" activeClassName="active" className="nav-link">Characters</NavLink>
                            <NavLink to="/episodes" className="nav-link">Episodes</NavLink>
                            <NavLink to="/location" className="nav-link">Location</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar