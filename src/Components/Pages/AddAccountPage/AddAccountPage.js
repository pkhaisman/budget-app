import React from 'react';
import Header from '../../Templates/Header/Header';
import AddAccountForm from '../../Forms/AddAccountForm/AddAccountForm';
import './AddAccountPage.css';

export default function AddAccountPage() {
    return (
        <div className='AddAccountPage'>
            <Header />
            <AddAccountForm />
        </div>
    );
}