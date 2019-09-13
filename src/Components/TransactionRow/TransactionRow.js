import React from 'react';
import './TransactionRow.css';

class TransactionRow extends React.Component {
    render() {
        const { transactionDate, transactionPayee, transactionCategory, transactionMemo, transactionOutflow, transactionInflow } = this.props.cashTransaction;
        return (
            <tr className='TransactionRow'>
                <td className='TransactionRow__cell TransactionRow__cell--no-right-margin'>{transactionDate}</td>
                <td className='TransactionRow__cell'>{transactionPayee}</td>
                <td className='TransactionRow__cell'>{transactionCategory}</td>
                <td className='TransactionRow__cell'>{transactionMemo}</td>
                <td className='TransactionRow__cell'>{transactionOutflow}</td>
                <td className='TransactionRow__cell'>{transactionInflow}</td>
            </tr>
        );
    }
}

export default TransactionRow;