export default DATA = {
    accounts: [
        {
            accountName: 'Citizens Bank',
            accountBalance: 1000,
            transactions: [
                {
                    transaction_date: '',
                    transaction_payee: 'Ultimo Coffee House',
                    transaction_category: 'Food: Dining',
                    transaction_memo: 'Coffee',
                    transaction_outflow: 5,
                    transaction_inflow: null,
                    transaction_account: DATA.account_name
                },
                {
                    transaction_date: '',
                    transaction_payee: 'Whole Foods',
                    transaction_category: 'Food: Groceries',
                    transaction_memo: '',
                    transaction_outflow: 25,
                    transaction_inflow: null,
                    transaction_account: DATA.account_name
                },
                {
                    transaction_date: '',
                    transaction_payee: 'El Poquito',
                    transaction_category: 'Inflow: To Be Budgeted',
                    transaction_memo: '',
                    transaction_outflow: null,
                    transaction_inflow: 200,
                    transaction_account: DATA.account_name
                },
                {
                    transaction_date: '',
                    transaction_payee: 'REI',
                    transaction_category: 'Material Posessions: Climbing',
                    transaction_memo: 'Climbing shoes',
                    transaction_outflow: 180,
                    transaction_inflow: null,
                    transaction_account: DATA.account_name
                },
            ]
        }
    ],
    categories: [
        {
            categoryName: 'Food',
            categoryBudgeted: 100,
            categorySpent: 50,
            categoryAvailable: 50,
            subCategory: [
                {
                    subCategoryName: 'Groceries',
                    subCategoryBudgeted: 75,
                    subCategorySpent: 25,
                    subCategoryAvailable: 50,
                    category: DATA.categories.categoryName
                },
                {
                    subCategoryName: 'Dining',
                    subCategoryBudgeted: 25,
                    subCategorySpent: 25,
                    subCategoryAvailable: 0,
                    category: DATA.categories.categoryName
                }
            ]
        }
    ]
}