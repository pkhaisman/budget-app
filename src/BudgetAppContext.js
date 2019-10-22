import React from 'react';

const BudgetAppContext = React.createContext({
    accounts:               {},
    categories:             {},
    transactions:           {},
    allTransactions:        {},
    subCategories:          {},
    username:               {},
    
    setContext:             () => {},
    resetState:              () => {},
    setUser:                () => {},
    
    addAccount:             () => {},
    addCategory:            () => {},
    deleteAccount:          () => {},
    addTransaction:         () => {},
    addSubCategory:         () => {},
    deleteCategory:         () => {},
    deleteSubcategory:      () => {},
    deleteTransaction:      () => {},
    updateSpentAmount:      () => {},
    updateBudgetedAmount:   () => {},
    updateAccountBalance:   () => {},
    
    month: {},
    year: {},
    goToNextMonth: () => {},
    goToPreviousMonth: () => {},
    filterTransactionsByMonth: () => {},
});

export default BudgetAppContext;