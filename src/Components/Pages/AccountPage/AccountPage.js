import React from 'react';
import Header from '../../Templates/Header/Header';
import AccountList from '../../AccountBar/AccountList/AccountList';
import AccountTransactionList from '../../Account/AccountTransactionList/AccountTransactionList';
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