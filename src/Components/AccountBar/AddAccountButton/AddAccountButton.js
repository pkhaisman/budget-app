import React from 'react';
import { Link } from 'react-router-dom';
import './AddAccountButton.css';

class AddAccountButton extends React.Component {
    render() {
        return (
            <div className='AddAccountButton'>
                <Link to={'/add-account'}>
                    <button className='AddAccountButton__button'>Add Account</button>
                </Link>
            </div>
        );
    }
}

export default AddAccountButton;