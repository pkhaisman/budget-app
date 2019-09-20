import React from 'react';
import Header from '../../Templates/Header/Header';
import AddCategoryForm from '../../Forms/AddCategoryForm/AddCategoryForm';
import './AddCategoryPage.css';

export default function AddCategoryPage() {
    return (
        <div className='AddCategoryPage'>
            <Header />
            <AddCategoryForm />
        </div>
    );
}