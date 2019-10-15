import React from 'react';
import Header from '../../Templates/Header/Header';
import LoginForm from '../../Forms/LoginForm/LoginForm';
import './LoginPage.css';

class LoginPage extends React.Component {
    render() {
        return (
            <div className='LoginPage'>
                <Header />
                <LoginForm />
            </div>
        );
    }
}

export default LoginPage;