import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import AuthApiService from '../../../services/auth-api-service'
import ValidationError from '../../ValidationError/ValidationError'
import HelperMessage from '../../HelperMessage/HelperMessage';
import Loader from '../../Loader/Loader';
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
            button: 'Sign Up',
            validationMessages: {
                username: '',
                password: [],
            }
        }
    }

    updateUsername = (username) => { 
        this.setState({ username }, () => this.validateForm()) 
    }

    updatePassword = (password) => { 
        this.setState({ password }, () => this.validatePassword()) 
    }

    validateForm = () => {
        if (this.state.validationMessages.password.length === 0 && this.state.password && this.state.username) {
            this.setState({ formValid: true })
        } else {
            this.setState({ formValid: false })
        }
    }

    validatePassword = () => {
        const hasNum = /\d/
        const hasUpper = /[A-Z]/
        const hasLower = /[a-z]/
        const hasSymbol = /.*\W/
        let passwordHelperMessages = []

        if (this.state.password.startsWith(' ') || this.state.password.endsWith(' ')) {
            passwordHelperMessages.push('Password cannot begin or end with spaces')
        }

        if (this.state.password.length < 8) {
            passwordHelperMessages.push('Password must be longer than 8 characters')
        }

        if (this.state.password.length > 72) {
            passwordHelperMessages.push('Password must be less than 72 characters')
        }

        if (!hasNum.test(this.state.password)) {
            passwordHelperMessages.push('Password must have a number')
        }
        
        if (!hasUpper.test(this.state.password)) {
            passwordHelperMessages.push('Password must have an upper case letter')
        }

        if (!hasLower.test(this.state.password)) {
            passwordHelperMessages.push('Password must have a lower case letter')
        }
        
        if (!hasSymbol.test(this.state.password)) {
            passwordHelperMessages.push('Password must have a symbol')
        }

        this.setState({ validationMessages: { password: passwordHelperMessages } }, () => this.validateForm())

    };

    renderError = (error) => {
        // if error includes username then set username error message
        if (error.includes('Username')) {
            this.setState({
                validationMessages: {
                    username: error
                },
                displayMessage: true,
            })
        }
    }

    handleSubmit = e => {
        console.log('submitting form')
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
                            password: []
                        }
                    })
            })
            .catch(() => {
                this.signUp()
                console.log('error')
            })
    }

    // change function name
    signUp = () => {
        if (this.state.button === "Sign Up") {
            this.setState({ button: <Loader /> })
        } else {
            this.setState({ button: "Sign Up" })
        }
    }

    render() {
        // if there are no error messages then redirect
        if (this.state.toLogin) {
            return <Redirect to={{
                pathname: '/login',
                state: { from: 'signup' }
            }} />
        }

        const passwordHelperMessages = this.state.validationMessages.password.map(m => {
            return <HelperMessage message={m} password={this.state.password} />
        });

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
                        {passwordHelperMessages}
                        {/* <ValidationError hasError={this.state.displayMessage} message={this.state.validationMessages.password} /> */}
                    </div>
                </div>
                <div className='SignUpForm__buttons'>
                    {/* 
                        When I click the button:
                            Remove 'sign up' text
                            Add loader
                            Change text back when error
                            Show error message when error
                    */}
                    <button className='SignUpForm__buttons__signup' type='submit' disabled={!this.state.formValid} onClick={() => this.signUp()}>{this.state.button}</button>
                </div>
            </form>
        );
    }
}

export default withRouter(SignUpForm);