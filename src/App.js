import React from 'react';
import { Route } from 'react-router-dom';
import BudgetAccountView from './BudgetAccountView/BudgetAccountView';

class App extends React.Component {
    render() {
        return (
            <main className='App'>
                <Route path='/accounts' component={BudgetAccountView} />
            </main>
        );
    }
}

export default App;
