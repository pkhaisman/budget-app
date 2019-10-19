import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import BudgetAppContext from '../../../BudgetAppContext';
import './SubCategoryRow.css';

class SubcategoryRow extends React.Component {
    static contextType = BudgetAppContext;
    
    render() {
        const { subcategoryName, subcategorySpent, subcategoryId } = this.props.subcategory;

        return (
            <tr className='SubcategoryRow'>
                <td className='SubcategoryRow__cell SubcategoryRow__cell--col-1'>
                    {subcategoryName}
                    <FontAwesomeIcon className='SubcategoryRow__delete' icon={faTimesCircle} color='red' onClick={e => this.context.deleteSubcategory(subcategoryId)} />
                </td>
                <td className='SubcategoryRow__cell SubcategoryRow__cell--col-2'>{subcategorySpent}</td>
            </tr>
        );
    }
}

export default SubcategoryRow;