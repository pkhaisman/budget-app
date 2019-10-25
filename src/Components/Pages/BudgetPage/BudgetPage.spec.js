import React from 'react';
import BudgetPage from './BudgetPage';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
    const prop = function makeApiCalls() {
        return 'Making calls'
    }

    shallow(<BudgetPage makeApiCalls={prop} />)
});