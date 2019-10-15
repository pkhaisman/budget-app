import React from 'react';
import Header from '../../Templates/Header/Header';
import BudgetAppContext from '../../../BudgetAppContext'
import AccountList from '../../AccountBar/AccountList/AccountList';
import BudgetCategoryList from '../../Budget/BudgetCategoryList/BudgetCategoryList';
import ApiService from '../../../services/api-service'
import './BudgetPage.css';

class BudgetPage extends React.Component {
    static contextType = BudgetAppContext

    componentDidMount() {
        Promise.all([
            ApiService.getAccounts(),
            ApiService.getTransactions(),
            ApiService.getCategories(),
            ApiService.getSubcategories(),
        ])
            .then(([ accounts, transactions, categories, subcategories ]) => {
                this.context.setContext(accounts, transactions, categories, subcategories)
            })
    }

    render() {
        // wait until data is set in state before displaying page
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