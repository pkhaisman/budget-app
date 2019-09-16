import React from 'react';
import { Link } from 'react-router-dom';
import './UserForm.css';

class UserForm extends React.Component {
    render() {
        return (
            <form className='UserForm' onSubmit={(e) => e.preventDefault()}>
                <h2 className='UserForm__title'>{this.props.type}</h2>
                <div className='UserForm__user-inputs'>
                    <label htmlFor='email'>Email</label>
                    <input type='text' name='email' id='email' />
                    <label htmlFor='password'>Password</label>
                    <input type='text' name='password' id='password' />
                </div>
                <div className='UserForm__buttons'>
                    <Link to={'/'}>
                        <button>Cancel</button>
                    </Link>
                    <button>{this.props.type}</button>
                </div>
            </form>
        );
    }
}

export default UserForm;