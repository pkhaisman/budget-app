import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom';
import BudgetAppContext from '../../../BudgetAppContext';
import './AccountRow.css';

class AccountRow extends React.Component {
    static contextType = BudgetAppContext
    render() {
        const { accountId, accountName, accountBalance } = this.props.account

        return (
            <div className='AccountRow'>
                <FontAwesomeIcon icon={faTimesCircle} color='red' className='AccountRow__delete' onClick={e => this.context.deleteAccount(accountId)} />
                <Link className='AccountRow__account' to={`/accounts/${accountId}`}>
                    <p className='AccountRow__account__name'>{accountName}</p>
                    <p className='AccountRow__account__balance'>{accountBalance}</p>
                </Link>
            </div>
        );
    }
}

export default AccountRow;