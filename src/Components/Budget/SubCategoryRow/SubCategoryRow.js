import React from 'react';
import BudgetAppContext from '../../../BudgetAppContext';
import './SubCategoryRow.css';

class SubCategoryRow extends React.Component {
    static contextType = BudgetAppContext;

    render() {
        const { subCategoryName, subCategorySpent, subCategoryAvailable, subCategoryId } = this.props.subCategory;

        return (
            <tr className='SubCategoryRow'>
                <td className='subCategoryRow__cell '>{subCategoryName}</td>
                <td className='subCategoryRow__cell '>
                    <form onChange={e => {
                        this.context.updateBudgetedAmount(e.target.value, subCategoryId)
                    }}>
                        <label htmlFor='budgeted'></label>
                        <input type='number' name='budgeted' id='budgeted'></input>
                    </form>
                </td>
                <td className='subCategoryRow__cell subCategoryRow__cell--col-3'>{subCategorySpent}</td>
                <td className='subCategoryRow__cell '>{subCategoryAvailable}</td>
            </tr>
        );
    }
}

export default SubCategoryRow;