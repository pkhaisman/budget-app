import React from 'react';
import { Link } from 'react-router-dom';
import BudgetAppContext from '../../../BudgetAppContext';
import SubcategoryRow from '../SubCategoryRow/SubCategoryRow';
import './CategoryRow.css';

// displays parent category and sub categories
class CategoryRow extends React.Component {
    static contextType = BudgetAppContext;
    
    render() {
        const { categoryId, categoryName } = this.props.category
        
        // renders sub category rows
        const subcategoryRows = this.context.subcategories
            .filter(s => s.parentCategoryId === categoryId)
            .map(s => {
                let spent = this.context.transactions
                    .filter(t => t.transactionSubcategoryId === s.subcategoryId && new Date(t.transactionDate).getMonth() + 1 === this.context.month && new Date(t.transactionDate).getFullYear() === this.context.year)
                    .map(t => t.transactionOutflow)
                    .reduce((a, b) => {
                        return a + b
                    }, 0)
                s.subcategorySpent = spent

                return <SubcategoryRow key={s.subcategoryId} subcategory={s} />
            })
        
        // calculates values to display for parent category
        let categoryData = {}
        if (subcategoryRows.length !== 0) {
            let spent = 0
            subcategoryRows.forEach((row) => {
                const { subcategorySpent } = row.props.subcategory
                spent += parseInt(subcategorySpent);
            })
            
            categoryData = { categorySpent: spent }
        } else {
            categoryData = { categorySpent: 0 }
        }

        return (
            <tbody>
                <tr className='CategoryRow'>
                    <td className='CategoryRow__cell CategoryRow__cell--col-1'>
                        {categoryName}
                        <Link to={`/budget/${categoryId}/add-sub-category`}>
                            <button>+</button>
                        </Link>
                        <button onClick={e => this.context.deleteCategory(categoryId)}>x</button>
                    </td>
                    <td className='CategoryRow__cell CategoryRow__cell--col-3'>{categoryData.categorySpent}</td>
                </tr>
                {subcategoryRows}
            </tbody>
        );
    }
}

export default CategoryRow;