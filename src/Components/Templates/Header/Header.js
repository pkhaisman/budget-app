import React from 'react';
import { Link } from 'react-router-dom';
import BudgetAppContext from '../../../BudgetAppContext';
import TokenService from '../../../services/token-service';
import './Header.css';

class Header extends React.Component {
    static contextType = BudgetAppContext

    handleLogoutClick = () => {
        this.context.resetState()
        TokenService.clearAuthToken()
    }

    // show/ hide logout button if/if not user
    renderLoginLogoutButton = () => {
        const user = sessionStorage.getItem('userId')

        if (!user) {
            return (
                <Link to={'/login'}>
                    <button className='Header__logout'>Login</button>
                </Link>
            )
        } else {
            return (
                <Link to={'/'}>
                        <button className='Header__logout' onClick={this.handleLogoutClick}>Logout</button>
                </Link>
            )
        }
    }

    
    render() {

        return (
            <div className='Header'>
                <Link className='Header__title' to={'/'}>
                    <h1 className='Header__title__text'>Budget App</h1>
                </Link>
                {this.renderLoginLogoutButton()}
            </div>
        );
    }
}

export default Header;