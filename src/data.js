const DATA = {
    accounts: [
        {
            accountId: 1,
            accountName: 'Citizens Bank',
            accountBalance: 990,
        },
        {
            accountId: 2,
            accountName: 'Cash',
            accountBalance: 990,
        }
    ],
    transactions: [
        {
            transactionId: 1,
            transactionDate: '',
            transactionPayee: 'Reanimator',
            transactionCategory: 'Food: Dining',
            transactionMemo: 'Coffee',
            transactionOutflow: 5,
            transactionInflow: null,
            transactionAccountId: 1
        },
        {
            transactionId: 2,
            transactionDate: '',
            transactionPayee: 'Trader Joe`s',
            transactionCategory: 'Food: Groceries',
            transactionMemo: '',
            transactionOutflow: 25,
            transactionInflow: null,
            transactionAccountId: 1
        },
        {
            transactionId: 3,
            transactionDate: '',
            transactionPayee: 'We Move',
            transactionCategory: 'Inflow: To Be Budgeted',
            transactionMemo: '',
            transactionOutflow: null,
            transactionInflow: 200,
            transactionAccountId: 1
        },
        {
            transactionId: 4,
            transactionDate: '',
            transactionPayee: 'REI',
            transactionCategory: 'Material Posessions: Climbing',
            transactionMemo: 'Climbing shoes',
            transactionOutflow: 180,
            transactionInflow: null,
            transactionAccountId: 1
        },
        {
            transactionId: 5,
            transactionDate: '',
            transactionPayee: 'Ultimo Coffee House',
            transactionCategory: 'Food: Dining',
            transactionMemo: 'Coffee',
            transactionOutflow: 5,
            transactionInflow: null,
            transactionAccountId: 2
        },
        {
            transactionId: 6,
            transactionDate: '',
            transactionPayee: 'Whole Foods',
            transactionCategory: 'Food: Groceries',
            transactionMemo: '',
            transactionOutflow: 25,
            transactionInflow: null,
            transactionAccountId: 2
        },
        {
            transactionId: 7,
            transactionDate: '',
            transactionPayee: 'El Poquito',
            transactionCategory: 'Inflow: To Be Budgeted',
            transactionMemo: '',
            transactionOutflow: null,
            transactionInflow: 200,
            transactionAccountId: 2
        },
        {
            transactionId: 8,
            transactionDate: '',
            transactionPayee: 'REI',
            transactionCategory: 'Material Posessions: Climbing',
            transactionMemo: 'Climbing shoes',
            transactionOutflow: 180,
            transactionInflow: null,
            transactionAccountId: 2
        },
    ],
    categories: [
        {
            categoryId: 1,
            categoryName: 'Food',

        }
    ],
    subCategories: [
        {
            subCategoryId: 1,
            subCategoryName: 'Groceries',
            subCategoryBudgeted: 0,
            subCategorySpent: 25,
            subCategoryAvailable: -25,
            parentCategoryId: 1
        },
        {
            subCategoryId: 2,
            subCategoryName: 'Dining',
            subCategoryBudgeted: 0,
            subCategorySpent: 25,
            subCategoryAvailable: -25,
            parentCategoryId: 1
        }
    ]
}

export default DATA;