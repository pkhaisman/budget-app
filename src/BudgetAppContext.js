import React from 'react';

const BudgetAppContext = React.createContext({
    accounts:               {},
    categories:             {},
    transactions:           {},
    subCategories:          {},
    
    setContext:             () => {},
    
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
});

export default BudgetAppContext;