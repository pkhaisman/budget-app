import React from 'react';
import AccountTransactionList from './AccountTransactionList';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
    const context = {
        filterTransactionsByMonth: () => {}
    }

    shallow(<AccountTransactionList />, {context})
});