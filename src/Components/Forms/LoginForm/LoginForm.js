import React from 'react';
import { withRouter } from 'react-router-dom';
import BudgetAppContext from '../../../BudgetAppContext'
import ValidationError from '../../ValidationError/ValidationError'
import TokenService from '../../../services/token-service'
import AuthApiService from '../../../services/auth-api-service'
import ApiService from '../../../services/api-service';
import './LoginForm.css';

class LoginForm extends React.Component {
    static contextType = BudgetAppContext

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            usernameValid: false,
            passwordValid: false,
            validationMessages: {
                invalidCreds: ''
            },
            disableButton: true,
            formValid: false,
        }
    }

    updateUsername = (username) => { this.setState({ username }, () => this.validateForm()) }

    updatePassword = (password) => { this.setState({ password }, () => this.validateForm()) }

    validateForm = () => {
        this.state.username && this.state.password 
            ? this.setState({ disableButton: false })
            : this.setState({ disableButton: true }) 
    }

    handleSubmit = e => {
        e.preventDefault()
        const { username, password } = e.target
        
        ApiService.getUser(username.value) 
            .then(dbUser => {
                // saves JWT to session storage if valid credentials
                AuthApiService.postLogin({
                    username: username.value,
                    password: password.value,
                })
                    .then(res => {
                        TokenService.saveAuthToken(res.authToken)
                        TokenService.saveUserId(dbUser.id)
                        this.props.history.push('/budget')
                    })
                    .catch(() => {
                        this.setState({ 
                            validationMessages: {
                                invalidCreds: 'Invalid login credentials'
                            },
                            formValid: false
                        })
                    })
            })
    }

    render() {
        return (
            <form className='LoginForm' onSubmit={this.handleSubmit}>
                <h2 className='LoginForm__title'>Login</h2>
                <div className='LoginForm__user-inputs'>
                    <div>
                        <label className='LoginForm__user-label' htmlFor='username'>Username</label>
                        <input className='LoginForm__user-input' type='text' name='username' id='username' onChange={(e) => this.updateUsername(e.target.value)} />
                    </div>
                    <div>
                        <label className='LoginForm__user-label' htmlFor='password'>Password</label>
                        <input className='LoginForm__user-input' type='password' name='password' id='password' onChange={(e) => this.updatePassword(e.target.value)} />
                    </div>
                </div>
                <ValidationError hasError={!this.state.formValid} message={this.state.validationMessages.invalidCreds} />
                <div className='LoginForm__buttons'>
                    <button className='LoginForm__buttons__login' type='submit' disabled={this.state.disableButton}>Log In</button>
                </div>
            </form>
        );
    }
}

export default withRouter(LoginForm);