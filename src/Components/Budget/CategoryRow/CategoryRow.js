import React from 'react';
import SubCategoryRow from '../SubCategoryRow/SubCategoryRow';
import './CategoryRow.css';

class CategoryRow extends React.Component {
    render() {
        const { categoryName, categoryBudgeted, categorySpent, categoryAvailable } = this.props.category;

        const subCategoryRows = this.props.category.subCategories.map((subCategory, index) => {
            return (
                <SubCategoryRow key={index} subCategory={subCategory} />
            );
        });

        return (
            <tbody>
                <tr className='CategoryRow'>
                    <td className='CategoryRow__cell CategoryRow__cell--col-1'>{categoryName}</td>
                    <td className='CategoryRow__cell CategoryRow__cell--col-2'>{categoryBudgeted}</td>
                    <td className='CategoryRow__cell CategoryRow__cell--col-3'>{categorySpent}</td>
                    <td className='CategoryRow__cell CategoryRow__cell--col-4'>{categoryAvailable}</td>
                </tr>
                {subCategoryRows}
            </tbody>
        );
    }
}

export default CategoryRow;