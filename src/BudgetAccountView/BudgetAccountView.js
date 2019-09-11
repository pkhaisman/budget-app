import React from 'react';
import Header from '../Header/Header';
import AccountList from '../AccountList/AccountList';
import AccountTransactionList from '../AccountTransactionList/AccountTransactionList';
import './BudgetAccountView.css';

class BudgetAccountView extends React.Component {
    render() {
        return (
            <div className='BudgetAccountView'>
                <Header />
                <div className='BudgetAccountView__main-content'>
                    <AccountList />
                    <AccountTransactionList />
                </div>
            </div>
        );
    }
}

export default BudgetAccountView;