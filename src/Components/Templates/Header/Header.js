import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../../services/token-service';
import './Header.css';

class Header extends React.Component {
    handleLogoutClick = () => {
        TokenService.clearAuthToken()
    }

    render() {
        return (
            <div className='Header'>
                <Link className='Header__title' to={'/'}>
                    <h1 className='Header__title__text'>Budget App</h1>
                </Link>
                <Link to={'/'}>
                    <button className='Header__logout' onClick={this.handleLogoutClick}>Logout</button>
                </Link>
            </div>
        );
    }
}

export default Header;