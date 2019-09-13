import React from 'react';
import Header from '../Header/Header';
import AddAccountForm from '../AddAccountForm/AddAccountForm';
import './AddAccountPage.css';

// remove this comment
function AddAccountPage() {
    return (
        <div className='AddAccountPage'>
            <Header />
            <AddAccountForm />
        </div>
    );
}

export default AddAccountPage;