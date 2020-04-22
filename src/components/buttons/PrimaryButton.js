import React from 'react';
import './PrimaryButton.scss';

const PrimaryButton = props => {
    return (
        <button type={props.type} className="button-primary">{props.buttonText}</button>
    )
}

export default PrimaryButton;