import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Menu from '../../Templates/Menu/Menu';
import AccountDropdown from '../../AccountBar/AccountDropdown/AccountDropdown';
import './AccountSummary.css';

class AccountSummary extends React.Component {
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
        return (
            <div>
                <ul className='AccountSummary'>
                    <li className='AccountSummary__menu'>
                        <button onClick={this.toggleMenu}>
                            <Menu />  
                        </button>
                    </li>
                    <li>Cash</li>
                    <li>Balance</li>
                    <li>
                        <Link to={`/accounts/${this.props.match.params.account_id}/add-transaction`}>
                            <button>Add</button>
                        </Link>
                    </li>
                </ul>
                { this.state.showMenu ? <AccountDropdown /> : null }
            </div>
        );
    }
}

export default withRouter(AccountSummary);