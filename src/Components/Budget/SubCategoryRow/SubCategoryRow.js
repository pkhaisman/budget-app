import React from 'react';
import BudgetAppContext from '../../../BudgetAppContext';
import './SubcategoryRow.css';

class SubcategoryRow extends React.Component {
    static contextType = BudgetAppContext;

    render() {
        const { subcategoryName, subcategorySpent, subcategoryAvailable, subcategoryId } = this.props.subcategory;
        let spent = 0

        this.context.transactions.forEach(t => {
            if (t.transactionCategory === subcategoryName) {
                t.transactionOutflow 
                    ? spent -= t.transactionOutflow
                    : spent += t.transactionInflow
            }
        })

        return (
            <tr className='SubcategoryRow'>
                <td className='subcategoryRow__cell '>
                    {subcategoryName}
                    <button onClick={e => this.context.deleteSubcategory(subcategoryId)}>x</button>
                </td>
                <td className='subcategoryRow__cell '>
                    <form onChange={e => {
                        this.context.updateBudgetedAmount(e.target.value, subcategoryId)
                    }}>
                        <label htmlFor='budgeted'></label>
                        <input type='number' name='budgeted' id='budgeted'></input>
                    </form>
                </td>
                <td className='subcategoryRow__cell subcategoryRow__cell--col-3'>{spent}</td>
                <td className='subcategoryRow__cell '>{subcategoryAvailable}</td>
            </tr>
        );
    }
}

export default SubcategoryRow;