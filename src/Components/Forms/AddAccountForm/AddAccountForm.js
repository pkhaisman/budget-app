import React from 'react';
import { withRouter } from 'react-router-dom';
import BudgetAppContext from '../../../BudgetAppContext';
import ValidationError from '../../ValidationError/ValidationError'
import './AddAccountForm.css';

class AddAccountForm extends React.Component {
    static contextType = BudgetAppContext
    constructor(props) {
        super(props)
        this.state = {
            accountName: null,
            accountBalance: null,
            nameValid: false,
            balanceValid: false,
            validationMessages: {
                required: ''
            },
            formValid: false
        }
    }

    updateAccountName = (accountName) => {
        this.setState({ accountName }, this.validateName(accountName))
    }

    updateAccountBalance = (accountBalance) => {
        this.setState({ accountBalance }, this.validateBalance(accountBalance))
    }

    validateName = (fieldValue) => {
        let errorMessages = {...this.state.validationMessages}
        let hasError = false

        if (fieldValue.trim().length === 0) {
        errorMessages.required = 'Input is required';
            hasError = true;
        }

        this.setState({
            nameValid: !hasError,
            validationMessages: errorMessages
        }, this.formValid)
    }

    validateBalance = (fieldValue) => {
        let errorMessages = {...this.state.validationMessages}
        let hasError = false

        if (fieldValue.length === 0) {
        errorMessages.required = 'Input is required';
            hasError = true;
        }

        this.setState({
            balanceValid: !hasError,
            validationMessages: errorMessages
        }, this.formValid)
    }

    formValid = () => {
        const { nameValid, balanceValid } = this.state;
        this.setState({
            formValid: nameValid && balanceValid
        });
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
                    <label className='AddAccountForm__user-label' htmlFor='account-name'>Account Name</label>
                    <input className='AddAccountForm__user-input' type='text' name='account-name' id='account-name' onChange={e => this.updateAccountName(e.target.value)}></input> 
                    <ValidationError hasError={!this.state.nameValid} message={this.state.validationMessages.required} />
                    <label className='AddAccountForm__user-label' htmlFor='account-balance'>Account Balance</label>
                    <input className='AddAccountForm__user-input' type='number' name='account-balance' id='account-balance' onChange={e => this.updateAccountBalance(e.target.value)}></input>
                    <ValidationError hasError={!this.state.balanceValid} message={this.state.validationMessages.required} />
                </div>
                <div className='AddAccountForm__buttons'>
                    <button className='AddAccountForm__buttons__add' type='submit' disabled={!this.state.formValid}>Add</button>
                </div>
            </form>
        );
    }
}

export default withRouter(AddAccountForm);