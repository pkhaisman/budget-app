import React from 'react';
import Header from '../../Templates/Header/Header';
import LoginForm from '../../Forms/LoginForm/LoginForm';
import './LoginPage.css';

class LoginPage extends React.Component {
    render() {
        return (
            <div className='LoginPage'>
                <Header />
                {this.props.location.state
                    ? this.props.location.state.from === 'signup' ? <p className='LoginPage__message'>Account created!</p> : null
                    : null}
                <LoginForm />
            </div>
        );
    }
}

export default LoginPage;