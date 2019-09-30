import React from 'react';
import { Link } from 'react-router-dom';
import BudgetAppContext from '../../../BudgetAppContext';
import './AccountRow.css';

class AccountRow extends React.Component {
    static contextType = BudgetAppContext
    render() {
        const { accountId, accountName, accountBalance } = this.props.account
        
        return (
            <div className='AccountRow'>
                <button onClick={e => this.context.deleteAccount(accountId)}>x</button>
                <Link to={`/accounts/${accountId}`}>
                    <p>{accountName}</p>
                </Link>
                    <p>{accountBalance}</p>
            </div>
        );
    }
}

export default AccountRow;