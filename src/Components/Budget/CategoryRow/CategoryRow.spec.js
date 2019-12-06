import React from 'react';
import CategoryRow from './CategoryRow';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import testData from '../../../TestData'

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
    const category = testData.categories
    const subcategories = testData.subcategories
    const allTransactions = testData.allTransactions
    
    const context = { 
        subcategories: [subcategories],
        allTransactions: [allTransactions]
    }

    shallow(<CategoryRow category={category} />, { context })
});