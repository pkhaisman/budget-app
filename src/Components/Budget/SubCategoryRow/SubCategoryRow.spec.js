import React from 'react';
import SubCategoryRow from './SubCategoryRow';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import testData from '../../../TestData'

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
    const subcategory = testData.subcategories

    shallow(<SubCategoryRow subcategory={subcategory} />)
});