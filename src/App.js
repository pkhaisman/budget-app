import React from                       'react';
import uuid from                        'uuid/v4';
import BudgetAppContext from            './BudgetAppContext.js';
import { Route, BrowserRouter } from    'react-router-dom';
import DATA from                        './DATA.js'
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
            transactions: null,
            categories: null,
            subCategories: null,
        }
    }

    // set state with DATA json
    componentDidMount() {
        this.setState({
            accounts: DATA.accounts,
            transactions: DATA.transactions,
            categories: DATA.categories,
            subCategories: DATA.subCategories,
        })
    }

    updateBudgetedAmount = (budgetedAmount, subCategoryId) => {
        let subCategoriesClone = [
            ...this.state.subCategories,
        ]

        // find the subCategory and update budgeted and available fields
        subCategoriesClone.forEach(subCategory => {
            if (subCategory.subCategoryId === subCategoryId) {
                subCategory.subCategoryBudgeted = budgetedAmount
                subCategory.subCategoryAvailable = budgetedAmount - subCategory.subCategorySpent
            }
        })

        this.setState({
            subCategories: subCategoriesClone
        })
    }

    addCategory = (categoryName) => {
        const newCategory = {
            categoryId: uuid(),
            categoryName,
        }

        this.setState({
            categories: [
                ...this.state.categories,
                newCategory
            ]
        })
    }

    addSubCategory = (subCategoryName, parentId) => {
        // some ids are numbers but converted to string, others are uuid
        // this takes care of converting number id into type number
        // will not be a problem once i have db
        if (parentId.length < 2) {
            parentId = parseInt(parentId)
        }

        const newSubCategory = {
            subCategoryId: uuid(),
            subCategoryName,
            subCategoryBudgeted: 0,
            subCategorySpent: 0,
            subCategoryAvailable: 0,
            parentCategoryId: parentId,
        }

        this.setState({
            subCategories: [
                ...this.state.subCategories,
                newSubCategory
            ]
        })
    }

    addAccount = (accountName, accountBalance) => {
        const newAccount = {
            accountId: uuid(),
            accountName,
            accountBalance,
        }

        this.setState({
            accounts: [
                ...this.state.accounts,
                newAccount
            ]
        })
    }

    addTransaction = (transactionAccountId, transactionDate, transactionPayee, transactionCategory, transactionMemo, transactionOutflow, transactionInflow) => {
        // checks if transactionAccountId is number or uuid
        // makes ids of the same type for strict comparison
        // remove when db
        if (transactionAccountId < 2) {
            transactionAccountId = parseInt(transactionAccountId)
        } 

        const newTransaction = {
            transactionId: uuid(),
            transactionDate,
            transactionPayee,
            transactionCategory,
            transactionMemo,
            transactionOutflow,
            transactionInflow,
            transactionAccountId,
        }

        this.setState({
            transactions: [
                ...this.state.transactions,
                newTransaction
            ]
        })
    }

    updateAccountBalance = (accountId, transactionOutflow, transactionInflow) => {
        const accountsClone = this.state.accounts

        accountsClone.forEach(a => {
            // check if id is string or number
            if (a.accountId.length < 2) {
                a.accountId = parseInt(accountId)
            } 

            if (a.accountId === accountId) {
                transactionOutflow
                    ? a.accountBalance -= transactionOutflow
                    : a.accountBalance += transactionInflow
            }
        })

        this.setState({
            accounts: [
                ...accountsClone
            ]
        })
    }

    render() {
        const contextValue = {
            accounts: this.state.accounts,
            transactions: this.state.transactions,
            categories: this.state.categories,
            subCategories: this.state.subCategories,
            addAccount: this.addAccount,
            addCategory: this.addCategory,
            addTransaction: this.addTransaction,
            addSubCategory: this.addSubCategory,
            updateBudgetedAmount: this.updateBudgetedAmount,
            updateAccountBalance: this.updateAccountBalance,
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
