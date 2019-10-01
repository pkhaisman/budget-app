import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BudgetAppContext from '../../../BudgetAppContext';
import './AddTransactionForm.css';

class AddTransactionForm extends React.Component {
    static contextType = BudgetAppContext;
    constructor(props) {
        super(props)
        const { account_id } = this.props.match.params
        this.state = {
            transactionAccountId: account_id.length < 2 ? parseInt(account_id) : account_id,
            transactionSubcategoryId: 0,
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
        // if the payee is an account then set isDisabled to true
        let isDisabled = false
        this.context.accounts.forEach(a => {
            if (a.accountName === e.target.value) {
                isDisabled = true
            }
        })
        this.setState({
            transactionPayee: e.target.value,
            isDisabled,
        })
    }
    updateTransactionCategory = (e) => {
        e.preventDefault()
        let index = e.nativeEvent.target.selectedIndex
        const transactionSubcategoryId = e.nativeEvent.target[index].id.length < 2 ? parseInt(e.nativeEvent.target[index].id) : e.nativeEvent.target[index].id

        this.setState({
            transactionSubcategoryId,
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
    renderCategoryDropDown = () => {
        const categoryOptions = this.context.subcategories.map(s => {
            return <option key={s.subcategoryId} id={s.subcategoryId}>{s.subcategoryName}</option>
        })
        return (
            <select onChange={e => this.updateTransactionCategory(e)}>
                <option></option>
                <option id='inflow'>Inflow</option>
                {categoryOptions}
            </select>
        )
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { transactionAccountId, transactionSubcategoryId, transactionDate, transactionPayee, transactionCategory, transactionMemo, transactionOutflow, transactionInflow } = this.state
                
        this.setState({
            transactionAccountId: 0,
            transactionSubcategoryId: 0,
            transactionDate: '',
            transactionPayee: '',
            transactionCategory: '',
            transactionMemo: '',
            transactionOutflow: 0,
            transactionInflow: 0,
        })
        this.context.addTransaction(transactionAccountId, transactionSubcategoryId, transactionDate, transactionPayee, transactionCategory, transactionMemo, transactionOutflow, transactionInflow)
        this.context.updateSpentAmount(transactionOutflow, transactionInflow, transactionSubcategoryId)
        this.context.updateAccountBalance(transactionAccountId, transactionOutflow, transactionInflow)
        this.props.history.push(`/accounts/${this.state.transactionAccountId}`)
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
                    <label htmlFor='transaction-category'>
                        Category
                        {this.renderCategoryDropDown()}
                    </label>
                    <label htmlFor='transaction-memo'>Memo</label>
                    <input type='text' name='transaction-memo' id='transaction-memo' onChange={e => this.updateTransactionMemo(e)}></input>
                    <label htmlFor='transaction-outflow'>Outflow</label>
                    <input type='number' name='transaction-outflow' id='transaction-outflow' onChange={e => this.updateTransactionOutflow(e)}></input>
                    <label htmlFor='transaction-inflow'>Inflow</label>
                    <input type='number' name='transaction-inflow' id='transaction-inflow' onChange={e => this.updateTransactionInflow(e)}></input>
                </div>
                <div className='AddTransactionForm__buttons'>
                    <Link to={`/accounts/${this.state.transactionAccountId}`}>
                        <button>Cancel</button> 
                    </Link>
                    <button type='submit'>Add</button>
                </div>
            </form>
        );
    }
}

export default withRouter(AddTransactionForm);