import React from 'react';
import Hero from '../../LandingPage/Hero/Hero';
import Header from '../../Templates/Header/Header';
import Content from '../../LandingPage/Content/Content';
import './LandingPage.css';

class LandingPage extends React.Component {
    render() {
        return (
            <div className='LandingPage'>
                <Header />
                <Hero />
                <Content />
            </div>
        );
    }
}

export default LandingPage;