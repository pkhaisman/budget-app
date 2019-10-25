import React from 'react';
import TransactionRow from './TransactionRow';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
    const props = {
        transactionAccountId: 12,
        transactionDate: "2019-10-22T00:00:00.000Z",
        transactionId: 8,
        transactionInflow: null,
        transactionMemo: "",
        transactionOutflow: 25,
        transactionPayee: "Whole Foods",
        transactionSubcategoryId: 1
    }

    const context = {
        subcategories: [
            {
                parentCategoryId: 1,
                subcategoryBudgeted: undefined,
                subcategoryId: 1,
                subcategoryName: "Groceries",
                subcategorySpent: 53,
                userId: 1
            }
        ]
    }

    shallow(<TransactionRow transaction={props} />, { context })
});