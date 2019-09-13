import React from 'react';
import { Link } from 'react-router-dom';
import './AccountSummary.css';

class AccountSummary extends React.Component {
    render() {
        return (
            <ul className='AccountSummary'>
                <li>Cash</li>
                <li>Balance</li>
                <li>
                    <Link to={'/accounts/add-transaction'}>
                        <button>Add</button>
                    </Link>
                </li>
            </ul>
        );
    }
}

export default AccountSummary;