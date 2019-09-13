import React from 'react';
import TransactionRow from '../TransactionRow/TransactionRow';
import './TransactionTable.css';
import DATA from '../../DATA';

// lists all transactions in given account
class TransactionTable extends React.Component {
    render() {
        const cashTransactions = DATA.accounts[2].transactions;
        const cashTransactionRows = cashTransactions.map((cashTransaction, index) => {
            return <TransactionRow key={index} cashTransaction={cashTransaction} />
        });

        return (
            <table className='TransactionTable'>
                <thead>
                    <tr>
                        <th className='TransactionTable__cell TransactionTable__cell--no-right-margin TransactionTable__col--1'>Date</th>
                        <th className='TransactionTable__cell TransactionTable__col--2'>Payee</th>
                        <th className='TransactionTable__cell TransactionTable__col--3'>Category</th>
                        <th className='TransactionTable__cell TransactionTable__col--4'>Memo</th>
                        <th className='TransactionTable__cell TransactionTable__col--5'>Outflow</th>
                        <th className='TransactionTable__cell TransactionTable__col--6'>Inflow</th>
                    </tr>
                </thead>
                <tbody>
                    {cashTransactionRows}
                </tbody>
            </table>
        );
    }
}

export default TransactionTable;