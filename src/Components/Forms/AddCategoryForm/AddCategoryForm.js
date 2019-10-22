import React from 'react';
import { withRouter } from 'react-router-dom';
import BudgetAppContext from '../../../BudgetAppContext';
import ValidationError from '../../ValidationError/ValidationError';
import './AddCategoryForm.css';

class AddCategoryForm extends React.Component {
    static contextType = BudgetAppContext
    constructor(props) {
        super(props)
        this.state = {
            categoryName: null,
            nameValid: false,
            validationMessages: {
                required: ''
            },
            formValid: false
        }
    }

    handleChange = (categoryName) => {
        this.setState({ categoryName }, () => this.validateName(categoryName))
    }

    validateName = (fieldValue) => {
        let errorMessages = {...this.state.validationMessages}
        let hasError = false

        if (fieldValue.trim().length === 0) {
        errorMessages.required = 'Input is required';
            hasError = true;
        }

        this.setState({
            nameValid: !hasError,
            validationMessages: errorMessages
        }, this.formValid)
    }

    formValid = () => {
        const { nameValid } = this.state;
        this.setState({
            formValid: nameValid
        });
    }    

    handleSubmit = (e) => {
        e.preventDefault()
        const { categoryName } = this.state
        let { category_id } = this.props.match.params

        this.setState({
            categoryName: '',
        })
       
        this.context.addCategory(categoryName, category_id, sessionStorage.getItem('userId'))
        this.props.history.push(`/budget`);
    }

    render() {
        return (
            <form className='AddCategoryForm' onSubmit={e => this.handleSubmit(e)}>
                <h2 className='AddCategoryForm__title'>Add Category</h2>
                <div className='AddCategoryForm-user-inputs'>
                    <label htmlFor='category-name'>Category Name</label>
                    <input className='AddCategoryForm__user-input' type='text' name='category-name' id='category-name' onChange={e => this.handleChange(e.target.value)}></input> 
                    <ValidationError hasError={!this.state.nameValid} message={this.state.validationMessages.required} />
                </div>
                <div className='AddCategoryForm__buttons'>
                    <button className='AddCategoryForm__buttons__add' type='submit' disabled={!this.state.formValid}>Add</button>
                </div>
            </form>
        );
    }
}

export default withRouter(AddCategoryForm);