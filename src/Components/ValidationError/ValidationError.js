import React from 'react';
import './ValidationError.css'

export default function ValidationError(props) {
    if (props.hasError) {
        return (
            <div className="error">{props.message}</div>
        );
    }
    return <></>
}