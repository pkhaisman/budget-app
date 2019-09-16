import React from 'react';
import { Link } from 'react-router-dom';
import './AccountRow.css';

class AccountRow extends React.Component {
    render() {
        return (
            <div className='AccountRow'>
                <Link to={'/accounts'}>
                    <p>{this.props.account.accountName}</p>
                </Link>
                    <p>{this.props.account.accountBalance}</p>
            </div>
        );
    }
}

export default AccountRow;