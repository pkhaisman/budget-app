import React from 'react';
import { Link } from 'react-router-dom';
import CategoryRow from '../CategoryRow/CategoryRow';
import './CategoryTable.css';
import BudgetAppContext from '../../../BudgetAppContext';

class CategoryTable extends React.Component {
    static contextType = BudgetAppContext;

    render() {
        const categoryRows = this.context.categories.map(c => {
            return <CategoryRow key={c.categoryId} category={c} />
        });

        return (
            <table className='CategoryTable'>
                <thead>
                    <tr>
                        <th className='CategoryTable__cell CategoryTable__cell--col-1'>
                            <p>Category</p>
                            <Link to={'budget/add-category'}>
                                <button>+</button>
                            </Link>
                        </th>
                        <th className='CategoryTable__cell CategoryTable__cell--col-2'>Budgeted</th>
                        <th className='CategoryTable__cell CategoryTable__cell--col-3'>Spent</th>
                        <th className='CategoryTable__cell CategoryTable__cell--col-4'>Available</th>
                    </tr>
                </thead>
                {categoryRows}
            </table>
        );
    }
}

export default CategoryTable;