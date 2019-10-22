import React from 'react';
import Hero from '../../LandingPage/Hero/Hero';
import Header from '../../Templates/Header/Header';
import Content from '../../LandingPage/Content/Content';
import Footer from '../../LandingPage/Footer/Footer';
import './LandingPage.css';

class LandingPage extends React.Component {
    render() {
        return (
            <div className='LandingPage'>
                <Header />
                <Hero />
                <Content />
                <Footer />
            </div>
        );
    }
}

export default LandingPage;