import React from 'react';
import Menu from '../../Templates/Menu/Menu';
import AccountDropdown from '../../AccountBar/AccountDropdown/AccountDropdown';
import './BudgetSummary.css';

// displays budget summary on budget page
class BudgetSummary extends React.Component {
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
                <ul className='BudgetSummary'>
                    <li className='BudgetSummary__menu'>
                        <button onClick={this.toggleMenu}>
                            <Menu />  
                        </button>
                    </li>
                    <li>Month</li>
                    <li>Data</li>
                    <li>Data</li>
                </ul>
                { this.state.showMenu ? <AccountDropdown /> : null }
            </div>
        );
    }
}

export default BudgetSummary;