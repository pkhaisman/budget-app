import React from 'react';
import { Link } from 'react-router-dom';
import './AddTransactionForm.css';

class AddTransactionForm extends React.Component {
    render() {
        return (
            <form className='AddTransactionForm'>
                <h2 className='AddTransactionForm__title'>Add Transaction</h2>
                <div className='AddTransactionForm-user-inputs'>
                    <label htmlFor='transaction-date'>Date</label>
                    <input type='text' name='transaction-date' id='transaction-date'></input> 
                    <label htmlFor='transaction-payee'>Payee</label>
                    <input type='text' name='transaction-payee' id='transaction-payee'></input>
                    <label htmlFor='transaction-category'>Category</label>
                    <input type='text' name='transaction-category' id='transaction-category'></input>
                    <label htmlFor='transaction-memo'>Memo</label>
                    <input type='text' name='transaction-memo' id='transaction-memo'></input>
                    <label htmlFor='transaction-outflow'>Outflow</label>
                    <input type='text' name='transaction-outflow' id='transaction-outflow'></input>
                    <label htmlFor='transaction-inflow'>Inflow</label>
                    <input type='text' name='transaction-inflow' id='transaction-inflow'></input>
                </div>
                <div className='AddTransactionForm__buttons'>
                    <Link to={'/accounts'}>
                        <button>Cancel</button> 
                    </Link>
                    <button>Add</button>
                </div>
            </form>
        );
    }
}

export default AddTransactionForm;