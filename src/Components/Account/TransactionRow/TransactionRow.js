import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import BudgetAppContext from '../../../BudgetAppContext';
import './TransactionRow.css';

class TransactionRow extends React.Component {
    static contextType = BudgetAppContext

    formatDate = (date) => {
        let day = new Date(date).getDate()
        const month = new Date(date).getMonth() + 1
        const year = new Date(date).getFullYear()

        if (day < 10) {
            day = `0${day}`
        }

        return `${month}/${day}/${year}`
    }
    
    render() {
        let { transactionId, transactionDate, transactionPayee, transactionMemo, transactionOutflow, transactionSubcategoryId } = this.props.transaction;
        let transactionCategory
        this.context.subcategories.forEach(s => {
            if (s.subcategoryId === transactionSubcategoryId) {
                transactionCategory = s.subcategoryName
            }
        })

        transactionDate = this.formatDate(transactionDate)

        return (
            <tr className='TransactionRow'>
                {/* <td className='TransactionRow__cell TransactionRow__cell--no-right-margin'><FontAwesomeIcon icon={faTimesCircle} color='red' className='TransactionRow__delete' onClick={e => this.context.deleteTransaction(transactionId)} /></td> */}
                <td className='TransactionRow__cell TransactionRow__cell__col-1'>
                    <FontAwesomeIcon icon={faTimesCircle} color='red' className='TransactionRow__delete' onClick={e => this.context.deleteTransaction(transactionId)} />
                    {transactionDate}
                </td>
                <td className='TransactionRow__cell TransactionRow__cell__col-2'>{transactionPayee}</td>
                <td className='TransactionRow__cell TransactionRow__cell__col-3'>{transactionCategory}</td>
                <td className='TransactionRow__cell TransactionRow__cell__col-4'>{transactionMemo}</td>
                <td className='TransactionRow__cell TransactionRow__cell__col-5'>{transactionOutflow}</td>
            </tr>
        );
    }
}

export default TransactionRow;