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
    renderHeader = () => {
        const user = sessionStorage.getItem('userId')

        if (!user) {
            return (
                <div className='Header'>
                    <Link className='Header__title' to={'/'}>
                        <h1 className='Header__title Header__title__text'>Budget App</h1>
                    </Link>
                    <Link to={'/login'}>
                        <button className='Header__logout'>Login</button>
                    </Link>
                </div>
            )
        } else {
            return (
                <div className='Header'>
                    <h1 className='Header__title Header__title__text'>Budget App</h1>
                    <Link to={'/'}>
                            <button className='Header__logout' onClick={this.handleLogoutClick}>Logout</button>
                    </Link>
                </div>
            )
        }
    }

    
    render() {

        return (
            <div>
                {this.renderHeader()}
            </div>
        );
    }
}

export default Header;