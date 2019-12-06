import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import AuthApiService from '../../../services/auth-api-service'
import ValidationError from '../../ValidationError/ValidationError'
import './SignUpForm.css';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            formValid: false,
            displayMessage: false,
            toLogin: false,
            validationMessages: {
                username: '',
                password: '',
            }
        }
    }

    updateUsername = (username) => { this.setState({ username, validationMessages: { username: '' } }, () => this.validateForm()) }

    updatePassword = (password) => { this.setState({ password, validationMessages: { password: '' }  }, () => this.validateForm()) }

    validateForm = () => {
        this.state.username && this.state.password 
            ? this.setState({ formValid: true })
            : this.setState({ formValid: false }) 
    }

    renderError = (error) => {
        // if error includes username then set username error message
        if (error.includes('Username')) {
            this.setState({
                validationMessages: {
                    username: error
                },
                displayMessage: true,
            })
        // else if error includes password then set the password error message
        } else if (error.includes('Password')) {
            this.setState({
                validationMessages: {
                    password: error
                },
                displayMessage: true,
            })
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        const { username, password } = e.target

        AuthApiService.postUser({
            username: username.value,
            password: password.value,
        })
            .then((res) => {
                res.error 
                    ? this.renderError(res.error)
                    : this.setState({
                        username: '',
                        password: '',
                        toLogin: true,
                        validationMessages: {
                            username: '',
                            password: ''
                        }
                    })
            })
            .catch(() => {
                console.log('error')
            })
    }

    render() {
        // if there are no error messages then redirect
        if (this.state.toLogin) {
            return <Redirect to={{
                pathname: '/login',
                state: { from: 'signup' }
            }} />
        }

        return (
            <form className='SignUpForm' onSubmit={this.handleSubmit}>
                <h2 className='SignUpForm__title'>Sign Up</h2>
                <div className='SignUpForm__user-inputs'>
                    <div>
                        <label htmlFor='username'>Username</label>
                        <input className='SignUpForm__user-input' type='text' name='username' id='username' onChange={(e) => this.updateUsername(e.target.value)} />
                        <ValidationError hasError={this.state.displayMessage} message={this.state.validationMessages.username} />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input className='SignUpForm__user-input' type='password' name='password' id='password' onChange={(e) => this.updatePassword(e.target.value)} />
                        <ValidationError hasError={this.state.displayMessage} message={this.state.validationMessages.password} />
                    </div>
                </div>
                <div className='SignUpForm__buttons'>
                    <button className='SignUpForm__buttons__signup' type='submit' disabled={!this.state.formValid}>Sign Up</button>
                </div>
            </form>
        );
    }
}

export default withRouter(SignUpForm);