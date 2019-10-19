import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Menu from '../../Templates/Menu/Menu';
import AccountDropdown from '../../AccountBar/AccountDropdown/AccountDropdown';
import MonthYear from '../../MonthYear/MonthYear'
import BudgetAppContext from '../../../BudgetAppContext'
import './AccountSummary.css';

class AccountSummary extends React.Component {
    static contextType = BudgetAppContext

    constructor() {
        super();
        this.state = {
            showMenu: false,
        }
    }

    toggleMenu = (event) => {
        event.preventDefault();
        this.state.showMenu ? this.setState({ showMenu: false }) : this.setState({ showMenu: true })
    }

    render() {
        const account = this.context.accounts.find(a => a.accountId === parseInt(this.props.match.params.account_id))

        return (
            <div>
                <ul className='AccountSummary'>
                    <li className='AccountSummary__menu'>
                        <button className='AccountSummary__menu__btn' onClick={this.toggleMenu}>
                            <Menu />  
                        </button>
                    </li>
                    <MonthYear month={this.context.month} year={this.context.year} />
                    <li>{account.accountName}</li>
                    <li>
                        <Link to={`/accounts/${this.props.match.params.account_id}/add-transaction`}>
                            <button className='AccountSummary__add-transaction'>Add Transaction</button>
                        </Link>
                    </li>
                </ul>
                { this.state.showMenu ? <AccountDropdown closeMenu={this.closeMenu} /> : null }
            </div>
        );
    }
}

export default withRouter(AccountSummary);