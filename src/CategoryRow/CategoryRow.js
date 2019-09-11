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
                    <td className='CategoryRow__cell'>{categoryName}</td>
                    <td className='CategoryRow__cell'>{categoryBudgeted}</td>
                    <td className='CategoryRow__cell'>{categorySpent}</td>
                    <td className='CategoryRow__cell'>{categoryAvailable}</td>
                </tr>
                {subCategoryRows}
            </tbody>
        );
    }
}

export default CategoryRow;