import React from 'react';
import Header from '../../Templates/Header/Header';
import AccountList from '../../AccountBar/AccountList/AccountList';
import BudgetCategoryList from '../../Budget/BudgetCategoryList/BudgetCategoryList';
import './BudgetPage.css';

class BudgetPage extends React.Component {
    render() {
        return (
            <div className='BudgetPage'>
                <Header />
                <div className='BudgetPage__main-content'>
                    <AccountList />
                    <BudgetCategoryList />
                </div>
            </div>
        );
    }
}

export default BudgetPage;