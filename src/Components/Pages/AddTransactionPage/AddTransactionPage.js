import React from 'react';
import Header from '../../Templates/Header/Header';
import AddTransactionForm from '../../Forms/AddTransactionForm/AddTransactionForm';
import './AddTransactionPage.css';

export default function AddTransactionPage() {
    return (
        <div className='AddTransactionPage'>
            <Header />
            <AddTransactionForm />
        </div>
    );
}