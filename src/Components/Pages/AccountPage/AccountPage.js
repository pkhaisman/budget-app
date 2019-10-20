import React from 'react';
import BudgetAppContext from '../../../BudgetAppContext'
import Header from '../../Templates/Header/Header';
import AccountList from '../../AccountBar/AccountList/AccountList';
import AccountTransactionList from '../../Account/AccountTransactionList/AccountTransactionList';
import './AccountPage.css';

class AccountPage extends React.Component {
    static contextType = BudgetAppContext

    render() {
        if (!this.context.accounts || !this.context.categories) {
            return null;
        }
        
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