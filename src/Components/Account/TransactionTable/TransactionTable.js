import React from 'react';
import { withRouter } from 'react-router-dom';
import BudgetAppContext from '../../../BudgetAppContext';
import TransactionRow from '../TransactionRow/TransactionRow';
import './TransactionTable.css';

// lists all transactions in given account
class TransactionTable extends React.Component {
    static contextType = BudgetAppContext;

    render() {
        const account = this.context.accounts.find(account => {
            return account.accountId === this.props.match.params.account_id
        })

        const accountTransactionRows = account.accountTransactions.map((transaction, index) => {
            return <TransactionRow key={index} transaction={transaction} />
        })

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