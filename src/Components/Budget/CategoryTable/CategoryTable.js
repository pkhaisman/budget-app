import React from 'react';
import CategoryRow from '../CategoryRow/CategoryRow';
import './CategoryTable.css';
import DATA from '../../../DATA';

class CategoryTable extends React.Component {
    render() {
        const categoryRows = DATA.categories.map((category, index) => {
            return <CategoryRow key={index} category={category} />
        });

        return (
            <table className='CategoryTable'>
                <thead>
                    <tr>
                        <th className='CategoryTable__cell CategoryTable__cell--col-1'>Category</th>
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