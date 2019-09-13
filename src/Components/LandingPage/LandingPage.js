import React from 'react';
import Hero from '../Hero/Hero';
import NavBar from '../NavBar/NavBar';
import Content from '../Content/Content';
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