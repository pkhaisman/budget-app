import TokenService from './token-service'
import config from '../config'

const ApiService = {
    getAccounts() {
        return fetch(`${config.API_ENDPOINT}/accounts`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res => res.json())
            .then(accounts => 
                accounts.map(a => {
                    return {
                        accountId: a.id,
                        accountName: a.name,
                        accountBalance: a.balance,
                        userId: a.user_id
                    }
                })
            )
    },
    getTransactions() {
        return fetch(`${config.API_ENDPOINT}/transactions`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res => res.json())
            .then(transactions =>
                transactions.map(t => {
                    return {
                        transactionId: t.id,
                        transactionDate: t.date,
                        transactionPayee: t.payee,
                        transactionMemo: t.memo,
                        transactionOutflow: t.outflow,
                        transactionInflow: t.inflow,
                        transactionAccountId: t.account_id,
                        transactionSubcategoryId: t.subcategory_id,
                        userId: t.user_id
                    }
                })
            )
    },
    getCategories() {
        return fetch(`${config.API_ENDPOINT}/categories`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res => res.json())
            .then(categories => 
                categories.map(c => {
                    return {
                        categoryId: c.id,
                        categoryName: c.name,
                        userId: c.user_id
                    }
                })    
            )
    },
    getSubcategories() {
        return fetch(`${config.API_ENDPOINT}/subcategories`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res => res.json())
            .then(subcategories =>
                subcategories.map(s => {
                    return {
                        subcategoryId: s.id,
                        subcategoryName: s.name,
                        subcategoryBudgeted: s.budgeted,
                        subcategorySpent: s.spent,
                        parentCategoryId: s.category_id,
                        userId: s.user_id,
                    }
                })    
            )
    },
    postAccount(name, balance) {
        return fetch(`${config.API_ENDPOINT}/accounts`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({
                name,
                balance
            }),
        })
            .then(res => res.json())
            .then(account => {
                return {
                    accountId: account.id,
                    accountName: account.name,
                    accountBalance: account.balance,
                    userId: account.user_id,
                }
            })
    },
    postTransaction(date, payee, memo, outflow, inflow, account_id, subcategory_id) {
        return fetch(`${config.API_ENDPOINT}/transactions`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({
                date,
                payee,
                memo,
                outflow,
                inflow,
                account_id,
                subcategory_id
            })
        })
            .then(res => res.json())
            .then(transaction => {
                return {
                    transactionId: transaction.id,
                    transactionDate: transaction.date,
                    transactionPayee: transaction.payee,
                    transactionMemo: transaction.memo,
                    transactionOutflow: transaction.outflow,
                    transactionInflow: transaction.inflow,
                    transactionAccountId: transaction.account_id,
                    transactionSubcategoryId: transaction.subcategory_id,
                    userId: transaction.user_id,
                }
            })
    },
    postCategory(name) {
        return fetch(`${config.API_ENDPOINT}/categories`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({ name })
        })
            .then(res => res.json())
            .then(category => {
                return {
                    categoryId: category.id,
                    categoryName: category.name,
                    userId: category.user_id
                }
            })
    },
    postSubcategory(name, budgeted, spent, category_id) {
        return fetch(`${config.API_ENDPOINT}/subcategories`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({
                name,
                budgeted,
                spent,
                category_id
            })
        })
            .then(res => res.json())
            .then(subcategory => {
                return {
                    subcategoryId: subcategory.id,
                    subcategoryName: subcategory.name,
                    subcategoryBudgeted: subcategory.budgeted,
                    subcategorySpent: subcategory.spent,
                    parentCategoryId: subcategory.category_id,
                    userId: subcategory.user_id,
                }
            })
    },
    deleteCategory(categoryId) {
        return fetch(`${config.API_ENDPOINT}/categories/${categoryId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
    },
    deleteSubcategory(subcategoryId) {
        return fetch(`${config.API_ENDPOINT}/subcategories/${subcategoryId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
    },
    deleteTransaction(transactionId) {
        return fetch(`${config.API_ENDPOINT}/transactions/${transactionId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
    },
    deleteAccount(accountId) {
        return fetch(`${config.API_ENDPOINT}/accounts/${accountId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
    },
    updateAccountBalance(accountId, balance, name) {
        return fetch(`${config.API_ENDPOINT}/accounts/${accountId}`, {
            method: `PATCH`,
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({
                name,
                balance
            })
        })
    }
}

export default ApiService