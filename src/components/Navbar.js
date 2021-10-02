import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className='navbar is-light' role='navigation' aria-label='main navigation'>
                    <a href="/" className="navbar-item">
                        <Link to="/" className="navbar-item">Inicio</Link>
                        <Link to="/Us" className="navbar-item">Conocenos</Link>
                        <Link to="/Menu" className="navbar-item">Nuestro Menú</Link>
                        <Link to="/Reservation" className="navbar-item">Reserva</Link>
                    </a>

                   
            </nav>
        </div>
    );
}

export default Navbar;
