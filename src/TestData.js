const testData = {
    accounts: 
        {
            accountBalance: 97,
            accountId: 12,
            accountName: "Bank",
            userId: 1,
        }
    ,
    categories: 
        {    
            categoryId: 1,
            categoryName: "Food",
            userId: 1,
        }
    ,
    subcategories: 
        {    
            parentCategoryId: 1,
            subcategoryBudgeted: undefined,
            subcategoryId: 1,
            subcategoryName: "Groceries",
            subcategorySpent: 53,
            userId: 1,
        }
    ,
    transactions: 
        {    
            transactionAccountId: 12,
            transactionDate: "2019-10-22T00:00:00.000Z",
            transactionId: 8,
            transactionInflow: null,
            transactionMemo: "",
            transactionOutflow: 25,
            transactionPayee: "Whole Foods",
            transactionSubcategoryId: 1,
        }
    ,
    allTransactions: 
        {
            transactionAccountId: 12,
            transactionDate: "2019-10-22T00:00:00.000Z",
            transactionId: 8,
            transactionInflow: null,
            transactionMemo: "",
            transactionOutflow: 25,
            transactionPayee: "Whole Foods",
            transactionSubcategoryId: 1,
        }
    
}

export default testData