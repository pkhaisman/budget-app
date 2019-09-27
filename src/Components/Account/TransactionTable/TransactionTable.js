import React from 'react';
import { withRouter } from 'react-router-dom';
import BudgetAppContext from '../../../BudgetAppContext';
import TransactionRow from '../TransactionRow/TransactionRow';
import './TransactionTable.css';

// lists all transactions in given account
class TransactionTable extends React.Component {
    static contextType = BudgetAppContext;

    render() {
        let account_id = this.props.match.params.account_id

        // checks if id is number or uuid.
        // convertes number to type number
        // remove after db implementation
        if (account_id.length < 2) {
            account_id = parseInt(account_id)
        }

        const accountTransactionRows = this.context.transactions
            .filter(t => t.transactionAccountId === account_id)
            .map(t => <TransactionRow key={t.transactionId} transaction={t} />)

        return (
            <table className='TransactionTable'>
                <thead>
                    <tr>
                        <th className='TransactionTable__cell TransactionTable__cell__col-1 TransactionTable__cell--no-right-margin'>Date</th>
                        <th className='TransactionTable__cell TransactionTable__cell__col-2'>Payee</th>
                        <th className='TransactionTable__cell TransactionTable__cell__col-3'>Category</th>
                        <th className='TransactionTable__cell TransactionTable__cell__col-4'>Memo</th>
                        <th className='TransactionTable__cell TransactionTable__cell__col-5'>Outflow</th>
                        <th className='TransactionTable__cell TransactionTable__cell__col-6'>Inflow</th>
                    </tr>
                </thead>
                <tbody>
                    {accountTransactionRows}
                </tbody>
            </table>
        );
    }
}

export default withRouter(TransactionTable);