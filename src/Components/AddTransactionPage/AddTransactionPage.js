import React from 'react';
import Header from '../Header/Header';
import AddTransactionForm from '../AddTransactionForm/AddTransactionForm';
import './AddTransactionPage.css';

export default function AddTransactionPage() {
    return (
        <div className='AddTransactionPage'>
            <Header />
            <AddTransactionForm />
        </div>
    );
}