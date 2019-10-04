import React from                       'react';
import { Route, BrowserRouter } from    'react-router-dom';
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
        const date = new Date()
        const month = date.getMonth()
        const year = date.getFullYear()
        Promise.all([
            ApiService.getAccounts(),
            // get transactions of given month
            ApiService.getTransactions(
                // month, year
            ),
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
        // checks if adding category or subcategory based on presence of parentCategoryId
        if (!parentCategoryId) {
            ApiService.postCategory(categoryName)
                .then(newCategory => {
                    this.setState({
                        categories: [
                            ...this.state.categories,
                            newCategory
                        ]
                    })
                })
        } else {
            const newSubcategory = {
                subcategoryName: categoryName,
                subcategoryBudgeted: 0,
                subcategorySpent: 0,
                parentCategoryId
            }
            
            ApiService.postSubcategory(
                newSubcategory.subcategoryName,
                newSubcategory.subcategoryBudgeted,
                newSubcategory.subcategorySpent,
                newSubcategory.parentCategoryId
            )
                .then(newSubcategory => {
                    this.setState({
                        subcategories: [
                            ...this.state.subcategories,
                            newSubcategory
                        ]
                    })
                })
        }
    }
    addAccount = (accountName, accountBalance) => {
        ApiService.postAccount(accountName, accountBalance)
            .then(newAccount => {
                this.setState({
                    accounts: [
                        ...this.state.accounts,
                        newAccount
                    ]
                })
            })
    }
    addTransaction = (transactionDate, transactionPayee, transactionMemo, transactionOutflow, transactionInflow, transactionAccountId, transactionSubcategoryId) => {
        // convert transactionDate to this format 2019-09-29T00:00:00.000Z
        const formattedDate = transactionDate + 'T00:00:00.000Z'
        ApiService.postTransaction(formattedDate, transactionPayee, transactionMemo, transactionOutflow, transactionInflow, transactionAccountId, transactionSubcategoryId)
            .then(newTransaction => {
                this.setState({
                    transactions: [
                        ...this.state.transactions,
                        newTransaction
                    ]
                })
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
        const filteredCategories = this.state.categories.filter(c => c.categoryId !== categoryId)
        const filteredSubcategories = this.state.subcategories.filter(s => s.parentCategoryId !== categoryId)
        ApiService.deleteCategory(categoryId)
            .then(() => {
                this.setState({
                    categories: [
                        ...filteredCategories
                    ],
                    subcategories: [
                        ...filteredSubcategories
                    ]
                })
            })
    }
    deleteSubcategory = (subcategoryId) => {
        const filteredSubcategories = this.state.subcategories.filter(s => s.subcategoryId !== subcategoryId)
        ApiService.deleteSubcategory(subcategoryId)
            .then(() => {
                this.setState({
                    subcategories: [
                        ...filteredSubcategories
                    ]
                })
            })
    }
    // TODO
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
        const filteredAccounts = this.state.accounts.filter(a => a.accountId !== accountId)
        const filteredTransactions = this.state.transactions.filter(t => t.transactionAccountId !== accountId)
        ApiService.deleteAccount(accountId)
            .then(() => {
                this.setState({
                    transactions: [
                        ...filteredTransactions
                    ],
                    accounts: [
                        ...filteredAccounts
                    ]
                })
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
