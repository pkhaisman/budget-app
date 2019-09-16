import React from 'react';
import Hero from '../../LandingPage/Hero/Hero';
import NavBar from '../../LandingPage/NavBar/NavBar';
import Content from '../../LandingPage/Content/Content';
import './LandingPage.css';

class LandingPage extends React.Component {
    render() {
        return (
            <div className='LandingPage'>
                <NavBar />
                <Hero />
                <Content />
            </div>
        );
    }
}

export default LandingPage;