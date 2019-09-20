import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BudgetAppContext from '../../../BudgetAppContext';
import './AddCategoryForm.css';

class AddCategoryForm extends React.Component {
    static contextType = BudgetAppContext
    constructor(props) {
        super(props)
        this.state = {
            categoryName: null,
        }
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            categoryName: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { categoryName } = this.state
        this.setState({
            categoryName: '',
        })

        // checks if adding a category or a subCategory via params.category_id)
        if (!this.props.match.params.category_id) {
            this.context.addCategory(categoryName)
        } else if (this.props.match.params.category_id) {
            this.context.addSubCategory(categoryName, this.props.match.params.category_id)
        }
        this.props.history.push(`/budget`);
    }

    render() {
        return (
            <form className='AddCategoryForm' onSubmit={e => this.handleSubmit(e)}>
                <h2 className='AddCategoryForm__title'>Add Category</h2>
                <div className='AddCategoryForm-user-inputs'>
                    <label htmlFor='category-name'>Category Name</label>
                    <input type='text' name='category-name' id='category-name' onChange={e => this.handleChange(e)}></input> 
                </div>
                <div className='AddCategoryForm__buttons'>
                    <Link to={'/budget'}>
                        <button>Cancel</button> 
                    </Link>
                    <button type='submit'>Add</button>
                </div>
            </form>
        );
    }
}

export default withRouter(AddCategoryForm);