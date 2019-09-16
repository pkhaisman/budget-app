import React from 'react';
import './Menu.css';

class Menu extends React.Component {
    render() {
        return (
            <button className='Menu'>
                <div className='Menu__bar'></div>
                <div className='Menu__bar'></div>
                <div className='Menu__bar'></div>
            </button>
        );
    }
}

export default Menu;