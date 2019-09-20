import React from 'react';
import './AccountList.css';
import BudgetAppContext from '../../../BudgetAppContext';
import BudgetNavButton from '../BudgetNavButton/BudgetNavButton';
import AccountRow from '../AccountRow/AccountRow';
import AddAccountButton from '../AddAccountButton/AddAccountButton';

class AccountList extends React.Component {
    static contextType = BudgetAppContext

    render() {
        // const balance = this.context.accounts.map(account => account.accountStartingBalance).reduce((a, b) => a + b)
        const balance = this.context.accounts.map(account => account.accountBalance).reduce((a, b) => a + b)

        const accountRows = this.context.accounts.map((account, index) => {
            return <AccountRow key={index} account={account} />
        });

        return (
            <div className='AccountList'>
                <BudgetNavButton />
                <div className='AccountList__balance'>
                    <p>Balance</p>
                    <p>{balance}</p>
                </div>
                {accountRows}
                <AddAccountButton />
            </div>
        );
    }
}

export default AccountList;