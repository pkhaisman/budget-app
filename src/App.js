import React from                       'react';
import { Route, BrowserRouter } from    'react-router-dom';
import uuid from                        'uuid/v4';
import BudgetAppContext from            './BudgetAppContext.js';
import ApiService from                  './services/api-service'
import LoginPage from                   './components/Pages/LoginPage/LoginPage';
import BudgetPage from                   './components/Pages/BudgetPage/BudgetPage';
import SignUpPage from                  './components/Pages/SignUpPage/SignUpPage';
import LandingPage from                 './components/Pages/LandingPage/LandingPage';
import AccountPage from                 './components/Pages/AccountPage/AccountPage';
import AddAccountPage from              './components/Pages/AddAccountPage/AddAccountPage';
import AddCategoryPage from             './components/Pages/AddCategoryPage/AddCategoryPage';
import AddTransactionPage from          './components/Pages/AddTransactionPage/AddTransactionPage';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            accounts: '',
            categories: '',
            transactions: '',
            subcategories: '',
        }
    }

    // set state with DATA json
    componentDidMount() {
        Promise.all([
            ApiService.getAccounts(),
            ApiService.getTransactions(),
            ApiService.getCategories(),
            ApiService.getSubcategories(),
        ])
            .then(([ accounts, transactions, categories, subcategories ]) => {
                this.setState({ accounts, transactions, categories, subcategories })
            })
    }

    updateBudgetedAmount = (budgetedAmount, subcategoryId) => {
        const subcategoriesClone = this.state.subcategories

        // find the subCategory and update budgeted and available fields
        subcategoriesClone.forEach(s => {
            if (s.subcategoryId === subcategoryId) {
                s.subcategoryBudgeted = budgetedAmount
                s.subcategoryAvailable = parseInt(s.subcategorySpent) + parseInt(budgetedAmount)
            }
        })

        this.setState({
            subcategories: subcategoriesClone
        })
    }
    updateSpentAmount = (outflow, inflow, subcategoryId) => {
        const subcategoriesClone = this.state.subcategories

        subcategoriesClone.forEach(s => {
            if (s.subcategoryId === subcategoryId) {
                if (outflow) {
                    s.subcategorySpent -= outflow
                } else if (inflow) {
                    s.subcategorySpent += inflow
                }
            }
        })

        this.setState({
            subcategories: subcategoriesClone
        })
    }
    addCategory = (categoryName, parentCategoryId) => {
        if (!parentCategoryId) {
            const newCategory = {
                categoryId: uuid(),
                categoryName,
            }
            
            ApiService.postCategory(categoryName, newCategory.categoryId)
    
            this.setState({
                categories: [
                    ...this.state.categories,
                    newCategory
                ]
            })
        } else {
            if (parentCategoryId.length < 2) {
                parentCategoryId = parseInt(parentCategoryId)
            }
    
            const newSubcategory = {
                subcategoryId: uuid(),
                subcategoryName: categoryName,
                subcategoryBudgeted: 0,
                subcategorySpent: 0,
                subcategoryAvailable: 0,
                parentCategoryId: parentCategoryId,
            }

            const { subcategoryId, subcategoryBudgeted, subcategorySpent, subcategoryAvailable } = newSubcategory

            ApiService.postSubcategory(subcategoryId, categoryName, parentCategoryId, subcategoryBudgeted, subcategorySpent, subcategoryAvailable)
    
            this.setState({
                subcategories: [
                    ...this.state.subcategories,
                    newSubcategory
                ]
            })
        }
    }
    addAccount = (accountName, accountBalance) => {
        const newAccount = {
            accountId: uuid(),
            accountName,
            accountBalance,
        }

        ApiService.postAccount(newAccount.accountId, accountName, accountBalance)

        this.setState({
            accounts: [
                ...this.state.accounts,
                newAccount
            ]
        })
    }
    addTransaction = (transactionAccountId, transactionSubcategoryId, transactionDate, transactionPayee, transactionCategory, transactionMemo, transactionOutflow, transactionInflow) => {
        // checks if transactionAccountId is number or uuid
        // makes ids of the same type for strict comparison
        // remove when db
        if (transactionAccountId < 2) {
            transactionAccountId = parseInt(transactionAccountId)
        } 

        const newTransaction = {
            transactionId: uuid(),
            transactionSubcategoryId,
            transactionDate,
            transactionPayee,
            transactionCategory,
            transactionMemo,
            transactionOutflow,
            transactionInflow,
            transactionAccountId,
        }

        ApiService.postTransaction(newTransaction.transactionId, transactionSubcategoryId, transactionAccountId, transactionDate, transactionPayee, transactionCategory, transactionMemo, transactionOutflow, transactionInflow)

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
    deleteCategory = (categoryId) => {
        const { categories, subcategories } = this.state
        // delete from state
        // delete subcategories
        const subcategoriesToDelete = subcategories.filter(s => s.parentCategoryId === categoryId)
        subcategoriesToDelete.forEach(s => {
            this.deleteSubcategory(s.subcategoryId)
        })
        // delete category
        const categoriesClone = categories
        const categoryIndex = categoriesClone.findIndex(c => c.categoryId === categoryId)
        categoriesClone.splice(categoryIndex, 1)

        ApiService.deleteCategory(categoryId)

        this.setState({
            categories: [
                ...categoriesClone
            ]
        })
    }
    deleteSubcategory = (subcategoryId) => {
        const { subcategories } = this.state

        const subcategoriesClone = subcategories
        const subcategoryIndex = subcategories.findIndex(s => s.subcategoryId === subcategoryId)
        subcategoriesClone.splice(subcategoryIndex, 1)

        ApiService.deleteSubcategory(subcategoryId)

        this.setState({
            subcategories: [
                ...subcategoriesClone
            ]
        })
        
    }
    deleteTransaction = (transactionId) => {
        const { transactions } = this.state

        const transactionsClone = transactions
        const transactionIndex = transactions.findIndex(t => t.transactionId === transactionId)
        transactionsClone.splice(transactionIndex, 1)

        ApiService.deleteTransaction(transactionId)

        this.setState({
            transactions: [
                ...transactionsClone
            ]
        })
    }
    deleteAccount = (accountId) => {
        const { accounts, transactions } = this.state

        const transactionsToDelete = transactions.filter(t => t.transactionAccountId === accountId)
        transactionsToDelete.forEach(t => {
            this.deleteTransaction(t.transactionId)
        })

        const accountsClone = accounts
        const accountIndex = accountsClone.findIndex(a => a.accountId === accountId)
        accountsClone.splice(accountIndex, 1)

        ApiService.deleteAccount(accountId)

        this.setState({
            accounts: [
                ...accountsClone
            ]
        })
    }

    render() {
        const contextValue = {
            accounts:               this.state.accounts,
            categories:             this.state.categories,
            transactions:           this.state.transactions,
            subcategories:          this.state.subcategories,

            addAccount:             this.addAccount,
            addCategory:            this.addCategory,
            deleteAccount:          this.deleteAccount,
            deleteCategory:         this.deleteCategory,
            addTransaction:         this.addTransaction,
            addSubcategory:         this.addSubcategory,
            deleteSubcategory:      this.deleteSubcategory,
            deleteTransaction:      this.deleteTransaction,
            updateSpentAmount:      this.updateSpentAmount,
            updateBudgetedAmount:   this.updateBudgetedAmount,
            updateAccountBalance:   this.updateAccountBalance,
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
