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
                <Link to={'/'}>
                    <h1 className='Header__title'>Budget App</h1>
                </Link>
                <Link to={'/'}>
                    <button onClick={this.handleLogoutClick}>logout</button>
                </Link>
            </div>
        );
    }
}

export default Header;