import React from 'react';
import './AccountList.css';
import BudgetAppContext from '../../../BudgetAppContext';
import BudgetNavButton from '../BudgetNavButton/BudgetNavButton';
import AccountRow from '../AccountRow/AccountRow';
import AddAccountButton from '../AddAccountButton/AddAccountButton';

class AccountList extends React.Component {
    static contextType = BudgetAppContext

    render() {
        let balance = 0;
        this.context.accounts.forEach(account => {
            balance += parseInt(account.accountBalance)
        })

        const accountRows = this.context.accounts.map(a => {
            return <AccountRow key={a.accountId} account={a} />
        });

        return (
            <div className='AccountList'>
                <BudgetNavButton />
                <div className='AccountList__balance'>
                    <p>Balance</p>
                    <p>${balance}</p>
                </div>
                {accountRows}
                <AddAccountButton />
            </div>
        );
    }
}

// needed for component smoke test to pass
AccountList.contextTypes = {
    accounts: []
}

export default AccountList;