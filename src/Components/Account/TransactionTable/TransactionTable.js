import React from 'react';
import { withRouter } from 'react-router-dom';
import BudgetAppContext from '../../../BudgetAppContext';
import TransactionRow from '../TransactionRow/TransactionRow';
import './TransactionTable.css';

// lists all transactions in given account
class TransactionTable extends React.Component {
    static contextType = BudgetAppContext;

    render() {
        let accountId = this.props.match.params.account_id

        // filter transactions by account and month
        const accountTransactionRows = this.context.transactions
            .filter(t => t.transactionAccountId === parseInt(accountId) && new Date(t.transactionDate).getMonth() + 1 === this.context.month && new Date(t.transactionDate).getFullYear() === this.context.year)
            .map(t => <TransactionRow key={t.transactionId} transaction={t} />)

        return (
            <table className='TransactionTable'>
                <thead>
                    <tr>
                        <th className='TransactionTable__cell TransactionTable__cell--no-right-margin'></th>
                        <th className='TransactionTable__cell TransactionTable__cell__col-1 '>Date</th>
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