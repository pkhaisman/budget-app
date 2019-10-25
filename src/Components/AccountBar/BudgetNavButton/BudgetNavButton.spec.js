import React from 'react';
import BudgetNavButton from './BudgetNavButton';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
    shallow(<BudgetNavButton />)
});