import React from 'react';
import { withRouter } from 'react-router-dom';
import BudgetAppContext from '../../../BudgetAppContext';
import ValidationError from '../../ValidationError/ValidationError';
import './AddTransactionForm.css';

class AddTransactionForm extends React.Component {
    static contextType = BudgetAppContext;
    constructor(props) {
        super(props)
        const { account_id } = this.props.match.params
        this.state = {
            transactionDate: this.formatDate(),
            transactionPayee: '',
            transactionMemo: '',
            transactionOutflow: 0,
            transactionAccountId: parseInt(account_id),
            transactionSubcategoryId: 0,
            dateValid: true,
            outflowValid: false,
            inflowValid: false,
            subcategoryValid: false,
            validationMessages: {
                required: '',
                outflowOrInflow: '',
            },
            formValid: false
        }
    }

    formatDate = () => {
        let day = new Date().getDate()
        const month = new Date().getMonth() + 1
        const year = new Date().getFullYear()

        if (day < 10) {
            day = `0${day}`
        }

        return `${year}-${month}-${day}`
    }

    updateTransactionDate = (transactionDate) => { this.setState({ transactionDate }, this.validateDate(transactionDate))}

    updateTransactionPayee = (transactionPayee) => { this.setState({ transactionPayee })}
    
    updateTransactionMemo = (transactionMemo) => { this.setState({ transactionMemo })}
    
    updateTransactionOutflow = (transactionOutflow) => { this.setState({ transactionOutflow }, this.validateOutflow(transactionOutflow))}
    
    updateTransactionSubcategoryId = (e) => {
        e.preventDefault()
        let index = e.nativeEvent.target.selectedIndex
        const transactionSubcategoryId = e.nativeEvent.target[index].id

        if (transactionSubcategoryId === 0) {
            this.setState({
                transactionSubcategoryId: null
            }, this.validateSubcategory(transactionSubcategoryId))
        } else {
            this.setState({
                transactionSubcategoryId,
            }, this.validateSubcategory(transactionSubcategoryId))
        }

    }

    validateDate = (fieldValue) => {
        let errorMessages = {...this.state.validationMessages}
        let hasError = false

        if (fieldValue.length === 0) {
        errorMessages.required = 'Input is required';
            hasError = true;
        }

        this.setState({
            dateValid: !hasError,
            validationMessages: errorMessages
        }, this.formValid)
    }

    validateOutflow = (fieldValue) => {
        let errorMessages = {...this.state.validationMessages}
        let hasError = false

        if (!Boolean(fieldValue)) {
        errorMessages.outflowOrInflow = 'Input is required';
            hasError = true;
        }

        this.setState({
            outflowValid: !hasError,
            inflowValid: !hasError,
            validationMessages: errorMessages
        }, this.formValid)
    }

    validateSubcategory = (fieldValue) => {
        let errorMessages = {...this.state.validationMessages}
        let hasError = false

        if (!Boolean(fieldValue)) {
        errorMessages.required = 'Input is required';
            hasError = true;
        }

        this.setState({
            subcategoryValid: !hasError,
            validationMessages: errorMessages
        }, this.formValid)
    }

    formValid = () => {
        let { dateValid, subcategoryValid, outflowValid, inflowValid } = this.state;
        if (outflowValid || inflowValid) {
            outflowValid = true
            inflowValid = true
        }
        this.setState({
            formValid: dateValid && subcategoryValid && outflowValid && inflowValid
        });
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
            transactionDate: this.formatDate(),
            transactionPayee: '',
            transactionMemo: '',
            transactionOutflow: 0,
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
                        <label htmlFor='transaction-date'>Date*</label>
                        <input className='AddTransactionForm__user-input' type='date' name='transaction-date' id='transaction-date' value={this.state.transactionDate} onChange={e => this.updateTransactionDate(e.target.value)}></input>
                        <ValidationError hasError={!this.state.dateValid} message={this.state.validationMessages.required} /> 
                    </div>
                    <div>
                        <label htmlFor='transaction-payee'>Payee</label>
                        <input className='AddTransactionForm__user-input' type='text' name='transaction-payee' id='transaction-payee' onChange={e => this.updateTransactionPayee(e.target.value)}></input>
                    </div>
                    <div>
                        <label className='AddTransactionForm__category' htmlFor='transaction-category'>
                            <p className='AddTransactionForm__category__title'>Category* </p>
                            <div className='AddTransactionForm__category__options'>{this.renderCategoryDropDown()}</div>
                        </label>
                        <ValidationError hasError={!this.state.subcategoryValid} message={this.state.validationMessages.required} />
                    </div>
                    <div>
                        <label htmlFor='transaction-memo'>Memo</label>
                        <input className='AddTransactionForm__user-input' type='text' name='transaction-memo' id='transaction-memo' onChange={e => this.updateTransactionMemo(e.target.value)}></input>
                    </div>
                    <div>
                        <label htmlFor='transaction-outflow'>Outflow*</label>
                        <input className='AddTransactionForm__user-input' type='number' name='transaction-outflow' id='transaction-outflow' onChange={e => this.updateTransactionOutflow(parseInt(e.target.value))}></input>
                        <ValidationError hasError={!this.state.outflowValid} message={this.state.validationMessages.outflowOrInflow} />
                    </div>
                </div>
                <div className='AddTransactionForm__buttons'>
                    <button className='AddTransactionForm__buttons__add' type='submit' disabled={!this.state.formValid}>Add</button>
                </div>
            </form>
        );
    }
}

export default withRouter(AddTransactionForm);