import React from 'react';
import AccountRow from './AccountRow';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import testData from '../../../TestData'

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
    const account = testData.accounts

    shallow(<AccountRow account={account} />)
});