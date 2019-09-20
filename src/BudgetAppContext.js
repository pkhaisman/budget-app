import React from 'react';

const BudgetAppContext = React.createContext({
    accounts: {},
    categories: {},
    addAccount: () => {},
    addCategory: () => {},
    addTransaction: () => {},
    addSubCategory: () => {},
    updateBudgetedAmount: () => {},
});


export default BudgetAppContext;