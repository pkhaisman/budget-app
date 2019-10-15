import React from 'react';
import Header from '../../Templates/Header/Header';
import SignUpForm from '../../Forms/SignUpForm/SignUpForm'
import './SignUpPage.css';

class LoginPage extends React.Component {
    render() {
        return (
            <div className='SignUpPage'>
                <Header />
                <SignUpForm />
            </div>
        );
    }
}

export default LoginPage;