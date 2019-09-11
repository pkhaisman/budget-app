import React from 'react';
import './AccountRow.css';

class AccountRow extends React.Component {
    render() {
        return (
            <div className='AccountRow'>
                <p>{this.props.account.accountName}</p>
                <p>{this.props.account.accountBalance}</p>
            </div>
        );
    }
}

export default AccountRow;