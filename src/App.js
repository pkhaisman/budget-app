import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './Components/LoginPage/LoginPage';
import BudgetPage from './Components/BudgetPage/BudgetPage';
import SignUpPage from './Components/SignUpPage/SignUpPage';
import LandingPage from './Components/LandingPage/LandingPage';
import AccountPage from './Components/AccountPage/AccountPage';
import AddAccountPage from './Components/AddAccountPage/AddAccountPage';
import AddTransactionPage from './Components/AddTransactionPage/AddTransactionPage';

class App extends React.Component {
    render() {
        return (
            <main className='App'>
                <Route path='/' exact component={LandingPage} />
                <Route path='/accounts' exact component={AccountPage} />
                <Route path='/budget' component={BudgetPage} />
                <Route path='/login' component={LoginPage} />
                <Route path='/signup' component={SignUpPage} />
                <Route path='/accounts/add-account' component={AddAccountPage} />
                <Route path='/accounts/add-transaction' component={AddTransactionPage} />
            </main>
        );
    }
}

export default App;
