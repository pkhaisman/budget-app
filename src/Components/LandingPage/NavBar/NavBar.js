import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends React.Component {
    render() {
        return (
            <nav className='NavBar'>
                <div className='NavBar__flex-container'>
                    <h2>Budget App</h2>
                    <Link to={'/login'}>
                        <button>Login</button>
                    </Link>
                </div>
            </nav>
        );
    }
}

export default NavBar;