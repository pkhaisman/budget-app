import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className='Header'>
                <Link to={'/'}>
                    <h1 className='Header__title'>Budget App</h1>
                </Link>
            </div>
        );
    }
}

export default Header;