import React from 'react';
import BudgetAppContext from '../../../BudgetAppContext'
import Header from '../../Templates/Header/Header';
import AccountList from '../../AccountBar/AccountList/AccountList';
import AccountTransactionList from '../../Account/AccountTransactionList/AccountTransactionList';
import ApiService from '../../../services/api-service'
import './AccountPage.css';

class AccountPage extends React.Component {
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