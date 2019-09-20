import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

class Hero extends React.Component {
    render() {
        return (
            <div className='Hero'>
                <div className='Hero__title-container'>
                    <h1 className='Hero__title-container__title'>Money Stress?</h1>
                    <h1 className='Hero__title-container__title'>We Can Help</h1>
                </div>
                <div className='Hero__button-container'>
                    <Link to={'/signup'}>
                        <button className='Hero__button-container__button'>Sign Up</button>
                    </Link>
                    <Link to={'/budget'}>
                        <button className='Hero__button-container__button'>Demo</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Hero;