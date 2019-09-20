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
        const subCategoryRows = this.props.category.subCategories.map((subCategory, index) => {
            return (
                <SubCategoryRow key={index} category={this.props.category} subCategory={subCategory} />
            );
        });

        let categoryData = {}

        // calculates values to display for parent category
        if (subCategoryRows.length !== 0) {
            const budgetedArray = subCategoryRows.map(row => parseInt(row.props.subCategory.subCategoryBudgeted));
    
            const spentArray = subCategoryRows.map(row => {
                return row.props.subCategory.subCategorySpent
            });
            
            const availableArray = subCategoryRows.map(row => {
                return row.props.subCategory.subCategoryAvailable
            });
    
            categoryData = {
                categoryBudgeted: budgetedArray.reduce((a, b) => a + b),
                categorySpent: spentArray.reduce((a, b) => a + b),
                categoryAvailable: availableArray.reduce((a, b) => a + b),
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