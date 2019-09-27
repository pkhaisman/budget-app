import React from 'react';
import { Link } from 'react-router-dom';
import BudgetAppContext from '../../../BudgetAppContext';
import SubCategoryRow from '../SubCategoryRow/SubCategoryRow';
import './CategoryRow.css';

// displays parent category and sub categories
class CategoryRow extends React.Component {
    static contextType = BudgetAppContext;
    
    render() {
        // renders sub category rows
        
        const subCategoryRows = this.context.subCategories
            .filter(s => s.parentCategoryId === this.props.category.categoryId)
            .map(s => <SubCategoryRow key={s.subCategoryId} subCategory={s} />)

        let categoryData = {}

        // calculates values to display for parent category
        if (subCategoryRows.length !== 0) {
            let spent = 0, budgeted = 0, available = 0;
            subCategoryRows.forEach((row) => {
                spent += parseInt(row.props.subCategory.subCategorySpent);
                budgeted += parseInt(row.props.subCategory.subCategoryBudgeted)
                available += parseInt(row.props.subCategory.subCategoryAvailable)
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
                        {this.props.category.categoryName}
                        <Link to={`/budget/${this.props.category.categoryId}/add-sub-category`}>
                            <button>+</button>
                        </Link>
                    </td>
                    <td className='CategoryRow__cell CategoryRow__cell--col-2'>{categoryData.categoryBudgeted}</td>
                    <td className='CategoryRow__cell CategoryRow__cell--col-3'>{categoryData.categorySpent}</td>
                    <td className='CategoryRow__cell CategoryRow__cell--col-4'>{categoryData.categoryAvailable}</td>
                </tr>
                {subCategoryRows}
            </tbody>
        );
    }
}

export default CategoryRow;