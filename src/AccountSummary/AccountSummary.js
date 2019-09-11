import React from 'react';
import './AccountSummary.css';

class AccountSummary extends React.Component {
    render() {
        return (
            <ul className='AccountSummary'>
                <li>Cash</li>
                <li>Balance</li>
                <li>Add</li>
            </ul>
        );
    }
}

export default AccountSummary;