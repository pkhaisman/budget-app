import React from 'react';
import BudgetSummary from '../BudgetSummary/BudgetSummary';
import CategoryTable from '../CategoryTable/CategoryTable';
import './BudgetCategoryList.css';

class BudgetCategoryList extends React.Component {
    render() {
        return (
            <div className='BudgetCategoryList'>
                <BudgetSummary />
                <CategoryTable />
            </div>
        );
    }
}

export default BudgetCategoryList;