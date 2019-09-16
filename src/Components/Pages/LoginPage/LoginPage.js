import React from 'react';
import Header from '../../Templates/Header/Header';
import UserForm from '../../Templates/UserForm/UserForm';
import './LoginPage.css';

class LoginPage extends React.Component {
    render() {
        return (
            <div className='LoginPage'>
                <Header />
                <UserForm type='Login' />
            </div>
        );
    }
}

export default LoginPage;