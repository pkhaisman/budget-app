import React from 'react';

const BudgetAppContext = React.createContext({
    accounts:               {},
    categories:             {},
    transactions:           {},
    subCategories:          {},
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
    goToPreviousMonth: () => {},
    goToNextMonth: () => {},
    month: {},
    year: {},
});

export default BudgetAppContext;