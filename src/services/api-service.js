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
    },
    getTransactions() {
        return fetch(`${config.API_ENDPOINT}/transactions`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
    },
    getCategories() {
        return fetch(`${config.API_ENDPOINT}/categories`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
    },
    getSubcategories() {
        return fetch(`${config.API_ENDPOINT}/subcategories`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
    },
    postAccount(accountId, accountName, accountBalance) {
        return fetch(`${config.API_ENDPOINT}/accounts`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                accountId,
                accountName,
                accountBalance
            }),
        })
            .then(res => res.json())
    },
    postTransaction(transactionId, transactionAccountId, transactionDate, transactionPayee, transactionCategory, transactionMemo, transactionOutflow, transactionInflow) {
        return fetch(`${config.API_ENDPOINT}/transactions`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                transactionId,
                transactionAccountId, 
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
    postCategory(categoryName, categoryId) {
        return fetch(`${config.API_ENDPOINT}/categories`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                categoryName,
                categoryId
            })
        })
            .then(res => res.json())
    },
    postSubcategory(subcategoryId, subcategoryName, parentCategoryId, subcategoryBudgeted, subcategorySpent, subcategoryAvailable) {
        return fetch(`${config.API_ENDPOINT}/subcategories`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                subcategoryId,
                subcategoryName,
                parentCategoryId,
                subcategoryBudgeted, 
                subcategorySpent, 
                subcategoryAvailable
            })
        })
            .then(res => res.json())
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
    }
}

export default ApiService