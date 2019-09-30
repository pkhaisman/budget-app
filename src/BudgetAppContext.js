import React from 'react';

const BudgetAppContext = React.createContext({
    accounts: {},
    transactions: {},
    categories: {},
    subCategories: {},
    addAccount: () => {},
    addCategory: () => {},
    addTransaction: () => {},
    addSubCategory: () => {},
    updateBudgetedAmount: () => {},
    updateAccountBalance: () => {},
    deleteSubcategory: () => {},
    deleteCategory: () => {},
    deleteTransaction: () => {},
    deleteAccount: () => {},
});


export default BudgetAppContext;