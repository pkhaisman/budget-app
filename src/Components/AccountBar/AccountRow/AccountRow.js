import React from 'react';
import { Link } from 'react-router-dom';
import BudgetAppContext from '../../../BudgetAppContext';
import './AccountRow.css';

class AccountRow extends React.Component {
    static contextType = BudgetAppContext
    render() {
        return (
            <div className='AccountRow'>
                <Link to={`/accounts/${this.props.account.accountId}`}>
                    <p>{this.props.account.accountName}</p>
                </Link>
                    <p>{this.props.account.accountBalance}</p>
            </div>
        );
    }
}

export default AccountRow;