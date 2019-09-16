import React from 'react';
import './AccountDropdown.css';
import BudgetNavButton from '../../AccountBar/BudgetNavButton/BudgetNavButton';
import AccountRow from '../../AccountBar/AccountRow/AccountRow';
import AddAccountButton from '../../AccountBar/AddAccountButton/AddAccountButton';
import DATA from '../../../DATA';

class AccountDropdown extends React.Component {
    render() {
        const accountRows = DATA.accounts.map((account, index) => {
            return <AccountRow key={index} account={account} />
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