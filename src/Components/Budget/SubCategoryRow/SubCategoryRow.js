import React from 'react';
import BudgetAppContext from '../../../BudgetAppContext';
import './SubCategoryRow.css';

class SubcategoryRow extends React.Component {
    static contextType = BudgetAppContext;
    
    render() {
        const { subcategoryName, subcategorySpent, subcategoryId } = this.props.subcategory;

        return (
            <tr className='SubcategoryRow'>
                <td className='subcategoryRow__cell '>
                    {subcategoryName}
                    <button onClick={e => this.context.deleteSubcategory(subcategoryId)}>x</button>
                </td>
                <td className='subcategoryRow__cell subcategoryRow__cell--col-3'>{subcategorySpent}</td>
            </tr>
        );
    }
}

export default SubcategoryRow;