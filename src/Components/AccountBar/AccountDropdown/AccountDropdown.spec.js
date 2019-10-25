import React from 'react';
import AccountDropdown from './AccountDropdown';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import testData from '../../../TestData'

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
    const accounts = testData.accounts
    const context = { accounts: [accounts] }

    shallow(<AccountDropdown />, { context })
});