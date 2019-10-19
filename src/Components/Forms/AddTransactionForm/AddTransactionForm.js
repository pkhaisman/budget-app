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
            transactionDate: '',
            transactionPayee: '',
            transactionMemo: '',
            transactionOutflow: 0,
            transactionInflow: 0,
            transactionAccountId: parseInt(account_id),
            transactionSubcategoryId: 0,
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
    updateTransactionSubcategoryId = (e) => {
        e.preventDefault()
        let index = e.nativeEvent.target.selectedIndex
        const transactionSubcategoryId = e.nativeEvent.target[index].id

        if (transactionSubcategoryId === 0) {
            this.setState({
                transactionSubcategoryId: null
            })
        } else {
            this.setState({
                transactionSubcategoryId,
            })
        }

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
            <select className='AddTransactionForm__select-category' onChange={e => this.updateTransactionSubcategoryId(e)}>
                <option>Select category</option>
                {categoryOptions}
            </select>
        )
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { transactionDate, transactionPayee, transactionMemo, transactionOutflow, transactionInflow, transactionAccountId, transactionSubcategoryId } = this.state
                
        this.setState({
            transactionAccountId: 0,
            transactionSubcategoryId: 0,
            transactionDate: '',
            transactionPayee: '',
            transactionMemo: '',
            transactionOutflow: 0,
            transactionInflow: 0,
        })
        
        this.context.addTransaction(transactionDate, transactionPayee, transactionMemo, transactionOutflow, transactionInflow, transactionAccountId, transactionSubcategoryId, sessionStorage.getItem('userId'))
        this.context.updateSpentAmount(transactionOutflow, transactionInflow, transactionSubcategoryId)
        this.context.updateAccountBalance(transactionAccountId, transactionOutflow, transactionInflow)
        this.props.history.push(`/accounts/${this.state.transactionAccountId}`)
    }

    render() {        
        return (
            <form className='AddTransactionForm' onSubmit={e => this.handleSubmit(e)}>
                <h2 className='AddTransactionForm__title'>Add Transaction</h2>
                <div className='AddTransactionForm-user-inputs'>
                    <div>
                        <label htmlFor='transaction-date'>Date</label>
                        <input className='AddTransactionForm__user-input' type='date' name='transaction-date' id='transaction-date' onChange={e => this.updateTransactionDate(e)}></input> 
                    </div>
                    <div>
                        <label htmlFor='transaction-payee'>Payee</label>
                        <input className='AddTransactionForm__user-input' type='text' name='transaction-payee' id='transaction-payee' onChange={e => this.updateTransactionPayee(e)}></input>
                    </div>
                    <div>
                        <label className='AddTransactionForm__category' htmlFor='transaction-category'>
                            <p className='AddTransactionForm__category__title'>Category</p>
                            <div className='AddTransactionForm__category__options'>{this.renderCategoryDropDown()}</div>
                        </label>
                    </div>
                    <div>
                        <label htmlFor='transaction-memo'>Memo</label>
                        <input className='AddTransactionForm__user-input' type='text' name='transaction-memo' id='transaction-memo' onChange={e => this.updateTransactionMemo(e)}></input>
                    </div>
                    <div>
                        <label htmlFor='transaction-outflow'>Outflow</label>
                        <input className='AddTransactionForm__user-input' type='number' name='transaction-outflow' id='transaction-outflow' onChange={e => this.updateTransactionOutflow(e)}></input>
                    </div>
                    <div>
                        <label htmlFor='transaction-inflow'>Inflow</label>
                        <input className='AddTransactionForm__user-input' type='number' name='transaction-inflow' id='transaction-inflow' onChange={e => this.updateTransactionInflow(e)}></input>
                    </div>
                </div>
                <div className='AddTransactionForm__buttons'>
                    <button className='AddTransactionForm__buttons__add' type='submit'>Add</button>
                </div>
            </form>
        );
    }
}

export default withRouter(AddTransactionForm);