import React from 'react';
import Header from '../Header/Header';
import AddAccountForm from '../AddAccountForm/AddAccountForm';
import './AddAccountPage.css';

export default function AddAccountPage() {
    return (
        <div className='AddAccountPage'>
            <Header />
            <AddAccountForm />
        </div>
    );
}