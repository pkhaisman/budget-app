import React from 'react';
import './HelperMessage.css'

export default function HelperMessage(props) {
    if (props.password) {
        return (
            <div>{props.message}</div>
        );
    }
    return <></>
}