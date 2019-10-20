import React from                       'react';
import { BrowserRouter, withRouter } from    'react-router-dom';
import BudgetAppContext from            './BudgetAppContext.js';
import ApiService from                  './services/api-service'
import LoginPage from                   './components/Pages/LoginPage/LoginPage';
import BudgetPage from                  './components/Pages/BudgetPage/BudgetPage';
import SignUpPage from                  './components/Pages/SignUpPage/SignUpPage';
import LandingPage from                 './components/Pages/LandingPage/LandingPage';
import AccountPage from                 './components/Pages/AccountPage/AccountPage';
import PublicRoute from                 './components/Routes/PublicRoute/PublicRoute';
import PrivateRoute from                './components/Routes/PrivateRoute/PrivateRoute';
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
            allTransactions: '',
            subcategories: '',
            username: '',
            month: new Date().getMonth() + 1,
            year: new Date().getFullYear()
        }
    }

    componentDidMount() {
        if (sessionStorage.userId) {
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
                    this.setState({
                        accounts,
                        transactions,
                        allTransactions,
                        categories,
                        subcategories
                    })
                })
        }

    }

    setUser = (username) => {
        this.setState({ username })
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
    updateAccountBalance = (accountId, transactionOutflow, transactionInflow) => {
        let account
        let newBalance
        const accountsClone = this.state.accounts

        accountsClone.forEach(a => {
            if (a.accountId === accountId) {
                transactionOutflow
                    ? a.accountBalance -= transactionOutflow
                    : a.accountBalance += transactionInflow
                account = a
                newBalance = a.accountBalance
            }
        })

        this.setState({
            accounts: [
                ...accountsClone
            ]
        })

        ApiService.updateAccountBalance(accountId, newBalance, account.accountName)
    }

    addCategory = (categoryName, parentCategoryId, userId) => {
        // checks if adding category or subcategory based on presence of parentCategoryId
        if (!parentCategoryId) {
            ApiService.postCategory(categoryName, userId)
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
                newSubcategory.parentCategoryId,
                userId
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
    addAccount = (accountName, accountBalance, userId) => {
        ApiService.postAccount(accountName, accountBalance, userId)
            .then(newAccount => {
                this.setState((state) => {
                    return {
                        accounts: [
                            ...state.accounts,
                            newAccount
                        ]
                    }
                })
            })
    }
    addTransaction = (transactionDate, transactionPayee, transactionMemo, transactionOutflow, transactionInflow, transactionAccountId, transactionSubcategoryId, userId) => {
        // convert transactionDate to this format 2019-09-29T00:00:00.000Z
        const formattedDate = transactionDate + 'T00:00:00.000Z'
        ApiService.postTransaction(formattedDate, transactionPayee, transactionMemo, transactionOutflow, transactionInflow, transactionAccountId, transactionSubcategoryId, userId)
            .then(newTransaction => {
                // if month of new transaction is equal to this.state.month then add transaction to this.state.transactions
                if (new Date(newTransaction.transactionDate).getMonth() + 1 === this.state.month) {
                    this.setState({
                        transactions: [
                            ...this.state.transactions,
                            newTransaction
                        ]
                    })
                }

                this.setState({
                    allTransactions: [
                        ...this.state.allTransactions,
                        newTransaction
                    ]
                })
            })
    }

    deleteCategory = (categoryId) => {
        const filteredCategories = this.state.categories.filter(c => c.categoryId !== categoryId)
        const subcategoriesOfCategory = this.state.subcategories.filter(s => s.parentCategoryId === categoryId)
        subcategoriesOfCategory.forEach(s => this.deleteSubcategory(s.subcategoryId))

        ApiService.deleteCategory(categoryId)
            .then(() => {
                this.setState({
                    categories: [
                        ...filteredCategories
                    ]
                })
            })
    }
    deleteSubcategory = (subcategoryId) => {
        const filteredSubcategories = this.state.subcategories.filter(s => s.subcategoryId !== subcategoryId)
        const filteredTransactions = this.state.transactions.filter(t => t.transactionSubcategoryId !== subcategoryId)
        const transactionsToDelete = this.state.transactions.filter(t => t.transactionSubcategoryId === subcategoryId)
        transactionsToDelete.forEach(t => {
            this.updateAccountBalance(t.transactionAccountId, t.transactionInflow, t.transactionOutflow)
        })
        
        ApiService.deleteSubcategory(subcategoryId)
            .then(() => {
                this.setState({
                    subcategories: [
                        ...filteredSubcategories
                    ],
                    transactions: [
                        ...filteredTransactions
                    ]
                })
            })
    }
    deleteTransaction = (transactionId) => {
        const transactionsClone = this.state.transactions
        const transaction = transactionsClone.find(t => t.transactionId === transactionId)
        const transactionIndex = transactionsClone.findIndex(t => t.transactionId === transactionId)
        transactionsClone.splice(transactionIndex, 1)

        // updates account balance when transaction deleted. inverts outflow and inflow. see updateAccountBalance function
        this.updateAccountBalance(transaction.transactionAccountId, transaction.transactionInflow, transaction.transactionOutflow)

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

    filterTransactionsByMonth = () => {
        const transactions = this.state.allTransactions.filter(t => {
            const month = new Date(t.transactionDate).getMonth() + 1
            const year = new Date(t.transactionDate).getFullYear()
            return month === this.state.month && year === this.state.year
        })

        this.setState({
            transactions
        })
    }
    goToPreviousMonth = (month) => {
        if (month < 1) {
            this.setState({
                month: 12,
                year: this.state.year - 1
            }, this.filterTransactionsByMonth())
        } else { 
            this.setState({
                month
            }, this.filterTransactionsByMonth)
        }
        
        // ApiService.getTransactions(month, this.state.year)
        //     .then(transactions => {
        //         this.setState({
        //             transactions
        //         })
        //     })
    }
    goToNextMonth = (month) => {
        if (month > 12) {
            this.setState({
                month: 1,
                year: this.state.year + 1
            }, this.filterTransactionsByMonth)
        } else { 
            this.setState({
                month
            }, this.filterTransactionsByMonth)
        }

        // ApiService.getTransactions(month, this.state.year)
        //     .then(transactions => {
        //         this.setState({
        //             transactions
        //         })
        //     })
    }

    render() {
        const contextValue = {
            accounts:               this.state.accounts,
            categories:             this.state.categories,
            transactions:           this.state.transactions,
            allTransactions:        this.state.allTransactions,
            subcategories:          this.state.subcategories,
            
            setContext:             this.setContext,
            setUser:                this.setUser,

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

            month:                  this.state.month,
            year:                   this.state.year,
            goToNextMonth:          this.goToNextMonth,
            goToPreviousMonth:      this.goToPreviousMonth,
        }

        return (
            <BrowserRouter>
                <main className='App'>
                    <BudgetAppContext.Provider value={contextValue}>
                        <PublicRoute path='/'                         
                            exact 
                            component={LandingPage} />
                        <PublicRoute path='/login'                    
                            component={LoginPage} />
                        <PrivateRoute path='/budget'                   
                            exact 
                            component={BudgetPage} />
                        <PublicRoute path='/signup'                   
                            component={SignUpPage} />
                        <PrivateRoute path='/add-account'              
                            component={AddAccountPage} />
                        <PrivateRoute path='/accounts/:account_id'  
                            exact   
                            component={AccountPage} />
                        <PrivateRoute path='/budget/add-category'      
                            component={AddCategoryPage} />
                        <PrivateRoute path='/budget/:category_id/add-sub-category'  
                            component={AddCategoryPage} />
                        <PrivateRoute path='/accounts/:account_id/add-transaction'          
                            component={AddTransactionPage} />
                    </BudgetAppContext.Provider>
                </main>
            </BrowserRouter>
        );
    }
}

export default withRouter(App);
