import React from 'react';
import './Checkbox.scss';

const Checkbox = props => {
    return (
        <label className="checkbox-label">
            <input className="checkbox" type="checkbox"/>{props.checkboxLabel}
        </label>
    )
}

export default Checkbox;