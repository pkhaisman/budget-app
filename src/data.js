const DATA = {
    accounts: [
        {
            accountName: 'Balance',
            accountBalance: 1100
        },
        {
            accountName: 'Citizens Bank',
            accountBalance: 1000,
            transactions: [
                {
                    transactionDate: '',
                    transactionPayee: 'Ultimo Coffee House',
                    transactionCategory: 'Food: Dining',
                    transactionMemo: 'Coffee',
                    transactionOutflow: 5,
                    transactionInflow: null,
                    transactionAccount: 'Citizens Bank'
                },
                {
                    transactionDate: '',
                    transactionPayee: 'Whole Foods',
                    transactionCategory: 'Food: Groceries',
                    transactionMemo: '',
                    transactionOutflow: 25,
                    transactionInflow: null,
                    transactionAccount: 'Citizens Bank'
                },
                {
                    transactionDate: '',
                    transaction_Payee: 'El Poquito',
                    transactionCategory: 'Inflow: To Be Budgeted',
                    transactionMemo: '',
                    transactionOutflow: null,
                    transactionInflow: 200,
                    transactionAccount: 'Citizens Bank'
                },
                {
                    transactionDate: '',
                    transactionPayee: 'REI',
                    transactionCategory: 'Material Posessions: Climbing',
                    transactionMemo: 'Climbing shoes',
                    transactionOutflow: 180,
                    transactionInflow: null,
                    transactionAccount: 'Citizens Bank'
                },
            ]
        },
        {
            accountName: 'Cash',
            accountBalance: 100,
            transactions: [
                {
                    transactionDate: '',
                    transactionPayee: 'Ultimo Coffee House',
                    transactionCategory: 'Food: Dining',
                    transactionMemo: 'Coffee',
                    transactionOutflow: 5,
                    transactionInflow: null,
                    transactionAccount: 'Cash'
                },
                {
                    transactionDate: '',
                    transactionPayee: 'Whole Foods',
                    transactionCategory: 'Food: Groceries',
                    transactionMemo: '',
                    transactionOutflow: 25,
                    transactionInflow: null,
                    transactionAccount: 'Cash'
                },
                {
                    transactionDate: '',
                    transaction_Payee: 'El Poquito',
                    transactionCategory: 'Inflow: To Be Budgeted',
                    transactionMemo: '',
                    transactionOutflow: null,
                    transactionInflow: 200,
                    transactionAccount: 'Cash'
                },
                {
                    transactionDate: '',
                    transactionPayee: 'REI',
                    transactionCategory: 'Material Posessions: Climbing',
                    transactionMemo: 'Climbing shoes',
                    transactionOutflow: 180,
                    transactionInflow: null,
                    transactionAccount: 'Cash'
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
            subCategories: [
                {
                    subCategoryName: 'Groceries',
                    subCategoryBudgeted: 75,
                    subCategorySpent: 25,
                    subCategoryAvailable: 50,
                },
                {
                    subCategoryName: 'Dining',
                    subCategoryBudgeted: 25,
                    subCategorySpent: 25,
                    subCategoryAvailable: 0,
                }
            ]
        }
    ]
}

export default DATA;