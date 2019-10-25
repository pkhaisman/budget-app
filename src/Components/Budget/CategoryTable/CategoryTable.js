import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons'
import BudgetAppContext from '../../../BudgetAppContext';
import CategoryRow from '../CategoryRow/CategoryRow';
import './CategoryTable.css';

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
                            <div className='CategoryTable__cell--flex-container'>
                                <p>Category</p>
                                <Link to={'budget/add-category'}>
                                    <FontAwesomeIcon className='CategoryTable__add' icon={faPlusSquare} color='#2c97ad' />
                                </Link>
                            </div>
                        </th>
                        <th className='CategoryTable__cell CategoryTable__cell--col-2'>Spent</th>
                    </tr>
                </thead>
                
                {categoryRows}
            </table>
        );
    }
}

// needed for component smoke test to pass
CategoryTable.contextTypes = {
    categories: []
}

export default CategoryTable;