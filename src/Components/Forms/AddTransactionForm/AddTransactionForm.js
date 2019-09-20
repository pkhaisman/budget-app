import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BudgetAppContext from '../../../BudgetAppContext';
import './AddTransactionForm.css';

class AddTransactionForm extends React.Component {
    static contextType = BudgetAppContext;
    constructor(props) {
        super(props)
        this.state = {
            accountId: this.props.match.params.account_id,
            transactionDate: '',
            transactionPayee: '',
            transactionCategory: '',
            transactionMemo: '',
            transactionOutflow: '',
            transactionInflow: '',
        }
    }

    updateTransactionDate = (e) => {
        e.preventDefault()
        this.setState({
            transactionDate: e.target.value
        })
    }
    updateTransactionPayee = (e) => {
        e.preventDefault()
        this.setState({
            transactionPayee: e.target.value
        })
    }
    updateTransactionCategory = (e) => {
        e.preventDefault()
        this.setState({
            transactionCategory: e.target.value
        })
    }
    updateTransactionMemo = (e) => {
        e.preventDefault()
        this.setState({
            transactionMemo: e.target.value
        })
    }
    updateTransactionOutflow = (e) => {
        e.preventDefault()
        this.setState({
            transactionOutflow: parseInt(e.target.value)
        })
    }
    updateTransactionInflow = (e) => {
        e.preventDefault()
        this.setState({
            transactionInflow: parseInt(e.target.value)
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { accountId,transactionDate, transactionPayee, transactionCategory, transactionMemo, transactionOutflow, transactionInflow } = this.state
        console.log(this.state)
        this.setState({
            accountId: '',
            transactionDate: '',
            transactionPayee: '',
            transactionCategory: '',
            transactionMemo: '',
            transactionOutflow: '',
            transactionInflow: '',
        })
        this.context.addTransaction(accountId, transactionDate, transactionPayee, transactionCategory, transactionMemo, transactionOutflow, transactionInflow)
        this.props.history.push(`/accounts/${this.state.accountId}`)
    }

    render() {
        return (
            <form className='AddTransactionForm' onSubmit={e => this.handleSubmit(e)}>
                <h2 className='AddTransactionForm__title'>Add Transaction</h2>
                <div className='AddTransactionForm-user-inputs'>
                    <label htmlFor='transaction-date'>Date</label>
                    <input type='date' name='transaction-date' id='transaction-date' onChange={e => this.updateTransactionDate(e)}></input> 
                    <label htmlFor='transaction-payee'>Payee</label>
                    <input type='text' name='transaction-payee' id='transaction-payee' onChange={e => this.updateTransactionPayee(e)}></input>
                    <label htmlFor='transaction-category'>Category</label>
                    <input type='text' name='transaction-category' id='transaction-category' onChange={e => this.updateTransactionCategory(e)}></input>
                    <label htmlFor='transaction-memo'>Memo</label>
                    <input type='text' name='transaction-memo' id='transaction-memo' onChange={e => this.updateTransactionMemo(e)}></input>
                    <label htmlFor='transaction-outflow'>Outflow</label>
                    <input type='number' name='transaction-outflow' id='transaction-outflow' onChange={e => this.updateTransactionOutflow(e)}></input>
                    <label htmlFor='transaction-inflow'>Inflow</label>
                    <input type='number' name='transaction-inflow' id='transaction-inflow' onChange={e => this.updateTransactionInflow(e)}></input>
                </div>
                <div className='AddTransactionForm__buttons'>
                    <Link to={`/accounts/${this.state.accountId}`}>
                        <button>Cancel</button> 
                    </Link>
                    <button type='submit'>Add</button>
                </div>
            </form>
        );
    }
}

export default withRouter(AddTransactionForm);