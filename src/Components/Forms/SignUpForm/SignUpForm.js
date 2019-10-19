import React from 'react';
import { withRouter } from 'react-router-dom';
import AuthApiService from '../../../services/auth-api-service'
import './SignUpForm.css';

class SignUpForm extends React.Component {
    handleSubmit = e => {
        e.preventDefault()
        const { username, password } = e.target

        AuthApiService.postUser({
            username: username.value,
            password: password.value,
        })
            .then(() => {
                this.props.history.push('/budget')
            })
            .catch(() => {
                console.log('error')
            })
    }

    render() {
        return (
            <form className='SignUpForm' onSubmit={this.handleSubmit}>
                <h2 className='SignUpForm__title'>Sign Up</h2>
                <div className='SignUpForm__user-inputs'>
                    <div>
                        <label htmlFor='username'>Username</label>
                        <input className='SignUpForm__user-input' type='text' name='username' id='username' />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input className='SignUpForm__user-input' type='text' name='password' id='password' />
                    </div>
                </div>
                <div className='SignUpForm__buttons'>
                    <button className='SignUpForm__buttons__signup' type='submit'>Sign Up</button>
                </div>
            </form>
        );
    }
}

export default withRouter(SignUpForm);