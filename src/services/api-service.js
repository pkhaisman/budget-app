import config from '../config'

const ApiService = {
    getAccounts() {
        return fetch(`${config.API_ENDPOINT}/accounts`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(accounts => 
                accounts.map(a => {
                    return {
                        accountId: a.id,
                        accountName: a.name,
                        accountBalance: a.balance
                    }
                })
            )
    },
    getTransactions() {
        return fetch(`${config.API_ENDPOINT}/transactions`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
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
                    }
                })
            )
    },
    getCategories() {
        return fetch(`${config.API_ENDPOINT}/categories`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(categories => 
                categories.map(c => {
                    return {
                        categoryId: c.id,
                        categoryName: c.name
                    }
                })    
            )
    },
    getSubcategories() {
        return fetch(`${config.API_ENDPOINT}/subcategories`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
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
                        parentCategoryId: s.category_id
                    }
                })    
            )
    },
    postAccount(name, balance) {
        return fetch(`${config.API_ENDPOINT}/accounts`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
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
                    accountBalance: account.balance
                }
            })
    },
    postTransaction(transactionId, transactionSubcategoryId, transactionAccountId, transactionDate, transactionPayee, transactionCategory, transactionMemo, transactionOutflow, transactionInflow) {
        return fetch(`${config.API_ENDPOINT}/transactions`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                transactionId,
                transactionAccountId, 
                transactionSubcategoryId,
                transactionDate, 
                transactionPayee, 
                transactionCategory, 
                transactionMemo, 
                transactionOutflow, 
                transactionInflow
            })
        })
            .then(res => res.json())
    },
    postCategory(name) {
        return fetch(`${config.API_ENDPOINT}/categories`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ name })
        })
            .then(res => res.json())
            .then(category => {
                return {
                    categoryId: category.id,
                    categoryName: category.name
                }
            })
    },
    postSubcategory(name, budgeted, spent, category_id) {
        return fetch(`${config.API_ENDPOINT}/subcategories`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
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
                }
            })
    },
    deleteCategory(categoryId) {
        return fetch(`${config.API_ENDPOINT}/categories/${categoryId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
    },
    deleteSubcategory(subcategoryId) {
        return fetch(`${config.API_ENDPOINT}/subcategories/${subcategoryId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
    },
    deleteTransaction(transactionId) {
        return fetch(`${config.API_ENDPOINT}/transactions/${transactionId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
    },
    deleteAccount(accountId) {
        return fetch(`${config.API_ENDPOINT}/accounts/${accountId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
    },
}

export default ApiService