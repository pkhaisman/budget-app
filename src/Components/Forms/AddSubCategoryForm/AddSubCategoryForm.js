import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BudgetAppContext from '../../../BudgetAppContext';
import './AddSubCategoryForm.css';

class AddSubCategoryForm extends React.Component {
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
        this.setState({
            categoryName: ''
        })
        this.context.addCategory(this.state.categoryName)
        this.props.history.push(`/budget`);
    }

    render() {
        return (
            <form className='AddSubCategoryForm' onSubmit={e => this.handleSubmit(e)}>
                <h2 className='AddSubCategoryForm__title'>Add Category</h2>
                <div className='AddSubCategoryForm-user-inputs'>
                    <label htmlFor='category-name'>Category Name</label>
                    <input type='text' name='category-name' id='category-name' onChange={e => this.handleChange(e)}></input> 
                </div>
                <div className='AddSubCategoryForm__buttons'>
                    <Link to={'/budget'}>
                        <button>Cancel</button> 
                    </Link>
                    <button type='submit'>Add</button>
                </div>
            </form>
        );
    }
}

export default withRouter(AddSubCategoryForm);