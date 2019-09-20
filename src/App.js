import React from                       'react';
import uuid from                        'uuid/v4';
import BudgetAppContext from            './BudgetAppContext.js';
import { Route, BrowserRouter } from    'react-router-dom';
import DATA from                        './DATA'
import LoginPage from                   './Components/Pages/LoginPage/LoginPage';
import BudgetPage from                   './Components/Pages/BudgetPage/BudgetPage';
import SignUpPage from                  './Components/Pages/SignUpPage/SignUpPage';
import LandingPage from                 './Components/Pages/LandingPage/LandingPage';
import AccountPage from                 './Components/Pages/AccountPage/AccountPage';
import AddAccountPage from              './Components/Pages/AddAccountPage/AddAccountPage';
import AddCategoryPage from             './Components/Pages/AddCategoryPage/AddCategoryPage';
import AddTransactionPage from          './Components/Pages/AddTransactionPage/AddTransactionPage';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            accounts: null,
            categories: null,
        }
    }

    // set state with DATA json
    componentDidMount() {
        this.setState({
            accounts: DATA.accounts,
            categories: DATA.categories,
        })
    }

    updateBudgetedAmount = (budgetedAmount, subCategoryId, categoryId) => {
        let categoriesClone = [
            ...this.state.categories,
        ]

        // find the subCategory to update
        categoriesClone.forEach(category => {
            if (category.categoryId === categoryId) {
                category.subCategories.forEach(subCategory => {
                    if (subCategory.subCategoryId === subCategoryId) {
                        subCategory.subCategoryBudgeted = budgetedAmount
                        subCategory.subCategoryAvailable = budgetedAmount - subCategory.subCategorySpent
                    }
                })
            }
        })

        this.setState({
            categories: categoriesClone
        })
    }

    addCategory = (categoryName) => {
        const newCategory = {
            categoryId: uuid(),
            categoryName: categoryName,
            subCategories: [],
        }

        this.setState({
            categories: [
                ...this.state.categories,
                newCategory
            ]
        })
    }

    addSubCategory = (subCategoryName, categoryId) => {
        let categoriesClone = this.state.categories;
        const newSubCategory = {
            subCategoryId: uuid(),
            subCategoryName: subCategoryName,
            subCategoryBudgeted: 0,
            subCategorySpent: 0,
            subCategoryAvailable: 0,
            parentId: categoryId,
        }

        // add the new subCategory to the corresponding category
        categoriesClone.forEach((category) => {
            if (category.categoryId === categoryId) {
                category.subCategories.push(newSubCategory)
            }
        })

        this.setState({
            categories: categoriesClone
        })
    }

    addAccount = (accountName, accountBalance) => {
        const newAccount = {
            accountId: uuid(),
            accountName,
            accountBalance,
            accountTransactions: []
        }

        console.log(newAccount)

        this.setState({
            accounts: [
                ...this.state.accounts,
                newAccount
            ]
        })
    }

    addTransaction = (accountId, transactionDate, transactionPayee, transactionCategory, transactionMemo, transactionOutflow, transactionInflow) => {
        const accountsClone = this.state.accounts
        const newTransaction = {
            transactionDate,
            transactionPayee,
            transactionCategory,
            transactionMemo,
            transactionOutflow,
            transactionInflow,
        }

        // add transaction to corresponding account
        accountsClone.forEach(account => {
            if (account.accountId === accountId) {
                account.accountTransactions.push(newTransaction)
                const transactionBalance = account.accountTransactions
                    .map(transaction => {
                        return transaction.transactionOutflow ? -Math.abs(transaction.transactionOutflow) : transaction.transactionInflow
                    })
                    .reduce((a, b) => a + b)
                account.accountBalance = account.accountBalance + transactionBalance
            }
        })

        console.log(accountsClone)

        this.setState({
            accounts: accountsClone
        })
    }

    render() {
        const contextValue = {
            accounts: this.state.accounts,
            categories: this.state.categories,
            addAccount: this.addAccount,
            addCategory: this.addCategory,
            addTransaction: this.addTransaction,
            addSubCategory: this.addSubCategory,
            updateBudgetedAmount: this.updateBudgetedAmount,
        }

        // TODO: render loading page
        if (!this.state.accounts || !this.state.categories) {
            return null;
        }

        return (
            <BrowserRouter>
                <main className='App'>
                    <BudgetAppContext.Provider value={contextValue}>
                        <Route path='/'                         
                            exact 
                            component={LandingPage} />
                        <Route path='/login'                    
                            component={LoginPage} />
                        <Route path='/budget'                   
                            exact 
                            component={BudgetPage} />
                        <Route path='/signup'                   
                            component={SignUpPage} />
                        <Route path='/add-account'              
                            component={AddAccountPage} />
                        <Route path='/accounts/:account_id'  
                            exact   
                            component={AccountPage} />
                        <Route path='/budget/add-category'      
                            component={AddCategoryPage} />
                        <Route path='/budget/:category_id/add-sub-category'  
                            component={AddCategoryPage} />
                        <Route path='/accounts/:account_id/add-transaction'          
                            component={AddTransactionPage} />
                    </BudgetAppContext.Provider>
                </main>
            </BrowserRouter>
        );
    }
}

export default App;
