import React from 'react';
import Header from '../../Templates/Header/Header';
import UserForm from '../../Templates/UserForm/UserForm';
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