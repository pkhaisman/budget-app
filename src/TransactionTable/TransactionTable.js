import React from 'react';
import './TransactionTable.css';
import DATA from '../DATA';

class TransactionTable extends React.Component {
    render() {
        const transactions = DATA.accounts[2].transactions;
        const transactionRows = transactions.map(transaction => {
            const { transactionDate, transactionPayee, transactionCategory, transactionMemo, transactionOutflow, transactionInflow } = transaction;
            return (
                <tr>
                    <td className='TransactionTable__cell TransactionTable__cell--no-right-margin'>{transactionDate}</td>
                    <td className='TransactionTable__cell'>{transactionPayee}</td>
                    <td className='TransactionTable__cell'>{transactionCategory}</td>
                    <td className='TransactionTable__cell'>{transactionMemo}</td>
                    <td className='TransactionTable__cell'>{transactionOutflow}</td>
                    <td className='TransactionTable__cell'>{transactionInflow}</td>
                </tr>
            );
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
                    {transactionRows}
                </tbody>
            </table>
        );
    }
}

export default TransactionTable;