import React from 'react';
import './AccountList.css';
import BudgetNavButton from '../BudgetNavButton/BudgetNavButton';
import AccountRow from '../AccountRow/AccountRow';
import AddAccountButton from '../AddAccountButton/AddAccountButton';
import DATA from '../DATA';

class AccountList extends React.Component {
    render() {
        const accountRows = DATA.accounts.map((account, index) => {
            return <AccountRow key={index} account={account} />
        });

        return (
            <div className='AccountList'>
                <BudgetNavButton />
                {accountRows}
                <AddAccountButton />
            </div>
        );
    }
}

export default AccountList;