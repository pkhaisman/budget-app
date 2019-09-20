import uuid from 'uuid/v4';

const DATA = {
    accounts: [
        {
            accountId: uuid(),
            accountName: 'Citizens Bank',
            // accountStartingBalance: 1000,
            accountBalance: 990,
            accountTransactions: [
                {
                    transactionDate: '',
                    transactionPayee: 'Reanimator',
                    transactionCategory: 'Food: Dining',
                    transactionMemo: 'Coffee',
                    transactionOutflow: 5,
                    transactionInflow: null,
                    // transactionAccount: 'Citizens Bank'
                },
                {
                    transactionDate: '',
                    transactionPayee: 'Trader Joe`s',
                    transactionCategory: 'Food: Groceries',
                    transactionMemo: '',
                    transactionOutflow: 25,
                    transactionInflow: null,
                    // transactionAccount: 'Citizens Bank'
                },
                {
                    transactionDate: '',
                    transaction_Payee: 'We Move',
                    transactionCategory: 'Inflow: To Be Budgeted',
                    transactionMemo: '',
                    transactionOutflow: null,
                    transactionInflow: 200,
                    // transactionAccount: 'Citizens Bank'
                },
                {
                    transactionDate: '',
                    transactionPayee: 'REI',
                    transactionCategory: 'Material Posessions: Climbing',
                    transactionMemo: 'Climbing shoes',
                    transactionOutflow: 180,
                    transactionInflow: null,
                    // transactionAccount: 'Citizens Bank'
                },
            ]
        },
        {
            accountId: uuid(),
            accountName: 'Cash',
            // accountStartingBalance: 100,
            accountBalance: 990,
            accountTransactions: [
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
            categoryId: uuid(),
            categoryName: 'Food',
            subCategories: [
                {
                    subCategoryId: 1,
                    subCategoryName: 'Groceries',
                    subCategoryBudgeted: 0,
                    subCategorySpent: 25,
                    subCategoryAvailable: -25,
                    parentId: null
                },
                {
                    subCategoryId: 2,
                    subCategoryName: 'Dining',
                    subCategoryBudgeted: 0,
                    subCategorySpent: 25,
                    subCategoryAvailable: -25,
                    parentId: null
                }
            ]
        }
    ]
}

export default DATA;