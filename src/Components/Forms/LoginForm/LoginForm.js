import React from 'react';
import { withRouter } from 'react-router-dom';
import BudgetAppContext from '../../../BudgetAppContext'
import TokenService from '../../../services/token-service'
import AuthApiService from '../../../services/auth-api-service'
import './LoginForm.css';
import ApiService from '../../../services/api-service';

class LoginForm extends React.Component {
    static contextType = BudgetAppContext

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
                        console.log('error')
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
                        <input className='LoginForm__user-input' type='text' name='username' id='username' />
                    </div>
                    <div>
                        <label className='LoginForm__user-label' htmlFor='password'>Password</label>
                        <input className='LoginForm__user-input' type='text' name='password' id='password' />
                    </div>
                </div>
                <div className='LoginForm__buttons'>
                    <button className='LoginForm__buttons__login' type='submit'>Log In</button>
                </div>
            </form>
        );
    }
}

export default withRouter(LoginForm);