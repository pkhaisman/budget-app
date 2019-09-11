import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import AccountPage from './AccountPage/AccountPage';
import BudgetPage from './BudgetPage/BudgetPage';

class App extends React.Component {
    render() {
        return (
            <main className='App'>
                <Route path='/' exact component={LandingPage} />
                <Route path='/accounts' component={AccountPage} />
                <Route path='/budget' component={BudgetPage} />
            </main>
        );
    }
}

export default App;
