import React from 'react';
import Header from '../Header/Header';
import AccountList from '../AccountList/AccountList';
import AccountTransactionList from '../AccountTransactionList/AccountTransactionList';
import './AccountPage.css';

class AccountPage extends React.Component {
    render() {
        return (
            <div className='AccountPage'>
                <Header />
                <div className='AccountPage__main-content'>
                    <AccountList />
                    <AccountTransactionList />
                </div>
            </div>
        );
    }
}

export default AccountPage;