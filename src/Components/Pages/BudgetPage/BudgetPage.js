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
        let userId = sessionStorage.getItem('userId')

        Promise.all([
            ApiService.getAccounts(userId),
            ApiService.getTransactions(userId),
            ApiService.getCategories(userId),
            ApiService.getSubcategories(userId),
        ])
            .then(([ accounts, allTransactions, categories, subcategories ]) => {
                // if transaction date is of the current month then filter it into transactions
                const transactions = allTransactions.filter(t => {
                    const month = new Date(t.transactionDate).getMonth() + 1
                    const year = new Date(t.transactionDate).getFullYear()
                    return month === this.context.month && year === this.context.year
                })
                this.context.setContext(accounts, allTransactions, transactions, categories, subcategories)
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