import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className='Header'>
                <h1 className='Header__title'>Budget App</h1>
            </div>
        );
    }
}

export default Header;