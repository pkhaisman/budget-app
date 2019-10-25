import React from 'react';
import BudgetSummary from './BudgetSummary';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
    shallow(<BudgetSummary />)
});