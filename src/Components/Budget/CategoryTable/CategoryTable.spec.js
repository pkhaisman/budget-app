import React from 'react';
import CategoryTable from './CategoryTable';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import testData from '../../../TestData'

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
    const categories = testData.categories
    const context = { 
        categories: [categories] 
    }

    shallow(<CategoryTable />, { context })
});