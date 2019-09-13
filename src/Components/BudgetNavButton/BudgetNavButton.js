import React from 'react';
import { Link } from 'react-router-dom';
import './BudgetNavButton.css'

class BudgetNavButton extends React.Component {
    render() {
        return (
            <div className='BudgetNavButton'>
                <Link to={'/budget'}>
                    <button>Budget</button>
                </Link>
            </div>
        );
    }
}

export default BudgetNavButton;