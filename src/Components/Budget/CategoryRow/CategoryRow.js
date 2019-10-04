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
            .map(s => <SubcategoryRow key={s.subcategoryId} subcategory={s} />)
        
        // calculates values to display for parent category
        let categoryData = {}
        if (subcategoryRows.length !== 0) {
            let spent = 0, budgeted = 0, available = 0;
            subcategoryRows.forEach((row) => {
                const { subcategorySpent, subcategoryBudgeted } = row.props.subcategory
                spent += parseInt(subcategorySpent);
                budgeted += parseInt(subcategoryBudgeted)
                available = budgeted + spent
            })
            
            categoryData = {
                categoryBudgeted: budgeted,
                categorySpent: spent,
                categoryAvailable: available,
            }
        } else {
            categoryData = {
                categoryBudgeted: 0,
                categorySpent: 0,
                categoryAvailable: 0,
            }
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
                    <td className='CategoryRow__cell CategoryRow__cell--col-2'>{categoryData.categoryBudgeted}</td>
                    <td className='CategoryRow__cell CategoryRow__cell--col-3'>{categoryData.categorySpent}</td>
                    <td className='CategoryRow__cell CategoryRow__cell--col-4'>{categoryData.categoryAvailable}</td>
                </tr>
                {subcategoryRows}
            </tbody>
        );
    }
}

export default CategoryRow;