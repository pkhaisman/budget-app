import React from 'react';
import { Link } from 'react-router-dom';
import './AccountRow.css';

class AccountRow extends React.Component {
    render() {
        // const transactionBalance = this.props.account.accountTransactions
        //     .map(transaction => {
        //         return transaction.transactionOutflow ? -Math.abs(transaction.transactionOutflow) : transaction.transactionInflow
        //     })
        //     .reduce((a, b) => a + b)
        // const accountBalance = this.props.account.accountStartingBalance + transactionBalance

        return (
            <div className='AccountRow'>
                <Link to={`/accounts/${this.props.account.accountId}`}>
                    <p>{this.props.account.accountName}</p>
                </Link>
                    <p>{this.props.account.accountBalance}</p>
            </div>
        );
    }
}

export default AccountRow;