import React from 'react';
import BudgetAppContext from '../../../BudgetAppContext'
import AccountSummary from '../AccountSummary/AccountSummary';
import TransactionTable from '../TransactionTable/TransactionTable';
import './AccountTransactionList.css';

class AccountTransactionList extends React.Component {
    static contextType = BudgetAppContext
    
    componentDidMount() {
        this.context.filterTransactionsByMonth()
    }
    render() {
        return (
            <div className='AccountTransactionList'>
                <AccountSummary />
                <TransactionTable />
            </div>
        );
    }
}

export default AccountTransactionList;