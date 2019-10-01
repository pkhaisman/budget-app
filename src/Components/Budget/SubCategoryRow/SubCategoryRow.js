import React from 'react';
import BudgetAppContext from '../../../BudgetAppContext';
import './SubcategoryRow.css';

class SubcategoryRow extends React.Component {
    static contextType = BudgetAppContext;

    render() {
        const { subcategoryName, subcategorySpent, subcategoryBudgeted, subcategoryId } = this.props.subcategory;

        return (
            <tr className='SubcategoryRow'>
                <td className='subcategoryRow__cell '>
                    {subcategoryName}
                    <button onClick={e => this.context.deleteSubcategory(subcategoryId)}>x</button>
                </td>


                <td className='subcategoryRow__cell '>
                    <label htmlFor='budgeted'></label>
                    <input 
                        type='number' name='budgeted' id='budgeted' value={subcategoryBudgeted}
                        onChange={e => this.context.updateBudgetedAmount(e.target.value, subcategoryId)}></input>
                </td>


                <td className='subcategoryRow__cell subcategoryRow__cell--col-3'>{subcategorySpent}</td>
                <td className='subcategoryRow__cell '>{parseInt(subcategoryBudgeted) + parseInt(subcategorySpent)}</td>
            </tr>
        );
    }
}

export default SubcategoryRow;