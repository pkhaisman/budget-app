import React from 'react';
import './AccountDropdown.css';
import BudgetNavButton from '../BudgetNavButton/BudgetNavButton';
import AccountRow from '../AccountRow/AccountRow';
import AddAccountButton from '../AddAccountButton/AddAccountButton';
import BudgetAppContext from '../../../BudgetAppContext';

class AccountDropdown extends React.Component {
    static contextType = BudgetAppContext
    render() {
        const accountRows = this.context.accounts.map(account => {
            return <AccountRow toggleMenu={this.props.toggleMenu} key={account.accountId} account={account} />
        });

        return (
            <div className='AccountDropdown'>
                <BudgetNavButton />
                {accountRows}
                <AddAccountButton />
            </div>
        );
    }
}

export default AccountDropdown;