import React from 'react';
import AccountSummary from '../AccountSummary/AccountSummary';
import './AccountTransactionList.css';
import TransactionTable from '../TransactionTable/TransactionTable';

class AccountTransactionList extends React.Component {
    render() {
        return (
            <div className='AccountTransactionList'>
                <AccountSummary />
                <TransactionTable />
            </div>
        );
    }
}

export default AccountTransactionList;