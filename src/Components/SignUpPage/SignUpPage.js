import React from 'react';
import Header from '../Header/Header';
import UserForm from '../UserForm/UserForm';
import './SignUpPage.css';

class LoginPage extends React.Component {
    render() {
        return (
            <div className='SignUpPage'>
                <Header />
                <UserForm type='Sign Up' />
            </div>
        );
    }
}

export default LoginPage;