import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import TokenService from '../../../services/token-service'
import AuthApiService from '../../../services/auth-api-service'
import './LoginForm.css';

class LoginForm extends React.Component {
    handleSubmit = e => {
        e.preventDefault()
        const { username, password } = e.target

        // saves JWT to local storage if valid credentials
        AuthApiService.postLogin({
            username: username.value,
            password: password.value,
        })
            .then(res => {
                TokenService.saveAuthToken(res.authToken)
                this.props.history.push('/budget')
            })
            .catch(() => {
                console.log('error')
            })

    }

    render() {
        return (
            <form className='LoginForm' onSubmit={this.handleSubmit}>
                <h2 className='LoginForm__title'>Login</h2>
                <div className='LoginForm__user-inputs'>
                    <div>
                        <label htmlFor='username'>Username</label>
                        <input type='text' name='username' id='username' />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input type='text' name='password' id='password' />
                    </div>
                </div>
                <div className='LoginForm__buttons'>
                    <Link to={'/'}>
                        <button>Cancel</button>
                    </Link>
                    <button type='submit'>Login</button>
                </div>
            </form>
        );
    }
}

export default withRouter(LoginForm);