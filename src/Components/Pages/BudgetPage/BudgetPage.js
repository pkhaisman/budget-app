import React from 'react';
import Header from '../../Templates/Header/Header';
import BudgetAppContext from '../../../BudgetAppContext'
import AccountList from '../../AccountBar/AccountList/AccountList';
import BudgetCategoryList from '../../Budget/BudgetCategoryList/BudgetCategoryList';
import './BudgetPage.css';

class BudgetPage extends React.Component {
    static contextType = BudgetAppContext
    
    render() {
        if (!this.context.accounts || !this.context.categories) {
            return null;
        }
        
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