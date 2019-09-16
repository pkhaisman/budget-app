import React from 'react';
import AccountSummary from '../AccountSummary/AccountSummary';
import TransactionTable from '../TransactionTable/TransactionTable';
import './AccountTransactionList.css';

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