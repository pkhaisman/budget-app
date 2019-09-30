import React from 'react';
import BudgetAppContext from '../../../BudgetAppContext';
import './TransactionRow.css';

class TransactionRow extends React.Component {
    static contextType = BudgetAppContext
    
    render() {
        const { transactionId, transactionDate, transactionPayee, transactionCategory, transactionMemo, transactionOutflow, transactionInflow } = this.props.transaction;
        return (
            <tr className='TransactionRow'>
                <td className='TransactionRow__cell TransactionRow__cell--no-right-margin'><button onClick={e => this.context.deleteTransaction(transactionId)}>x</button></td>
                <td className='TransactionRow__cell TransactionRow__cell__col-1'>{transactionDate}</td>
                <td className='TransactionRow__cell TransactionRow__cell__col-2'>{transactionPayee}</td>
                <td className='TransactionRow__cell TransactionRow__cell__col-3'>{transactionCategory}</td>
                <td className='TransactionRow__cell TransactionRow__cell__col-4'>{transactionMemo}</td>
                <td className='TransactionRow__cell TransactionRow__cell__col-5'>{transactionOutflow}</td>
                <td className='TransactionRow__cell TransactionRow__cell__col-6'>{transactionInflow}</td>
            </tr>
        );
    }
}

export default TransactionRow;