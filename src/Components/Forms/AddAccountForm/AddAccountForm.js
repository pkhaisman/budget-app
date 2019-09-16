import React from 'react';
import { Link } from 'react-router-dom';
import './AddAccountForm.css';

class AddAccountForm extends React.Component {
    render() {
        return (
            <form className='AddAccountForm'>
                <h2 className='AddAccountForm__title'>Add Account</h2>
                <div className='AddAccountForm-user-inputs'>
                    <label htmlFor='account-name'>Account Name</label>
                    <input type='text' name='account-name' id='account-name'></input> 
                    <label htmlFor='account-balance'>Account Balance</label>
                    <input type='text' name='account-balance' id='account-balance'></input>
                </div>
                <div className='AddAccountForm__buttons'>
                    <Link to={'/accounts'}>
                        <button>Cancel</button> 
                    </Link>
                    <button>Add</button>
                </div>
            </form>
        );
    }
}

export default AddAccountForm;