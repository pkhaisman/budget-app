import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BudgetAppContext from '../../../BudgetAppContext';
import './AddAccountForm.css';

class AddAccountForm extends React.Component {
    static contextType = BudgetAppContext
    constructor(props) {
        super(props)
        this.state = {
            accountName: null,
            accountBalance: null,
        }
    }

    updateAccountName = (e) => {
        e.preventDefault(e)
        this.setState({
            accountName: e.target.value
        })
    }

    updateAccountBalance = (e) => {
        e.preventDefault(e)
        this.setState({
            accountBalance: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { accountName, accountBalance } = this.state

        this.setState({
            accountName: '',
            accountBalance: ''
        })
        
        this.context.addAccount(accountName, parseInt(accountBalance), sessionStorage.getItem('userId'))
        this.props.history.push('/budget')
    }

    render() {
        return (
            <form className='AddAccountForm' onSubmit={e => this.handleSubmit(e)}>
                <h2 className='AddAccountForm__title'>Add Account</h2>
                <div className='AddAccountForm-user-inputs'>
                    <label htmlFor='account-name'>Account Name</label>
                    <input className='AddAccountForm__user-input' type='text' name='account-name' id='account-name' onChange={e => this.updateAccountName(e)}></input> 
                    <label htmlFor='account-balance'>Account Balance</label>
                    <input className='AddAccountForm__user-input' type='number' name='account-balance' id='account-balance' onChange={e => this.updateAccountBalance(e)}></input>
                </div>
                <div className='AddAccountForm__buttons'>
                    <button className='AddAccountForm__buttons__add' type='submit'>Add</button>
                </div>
            </form>
        );
    }
}

export default withRouter(AddAccountForm);