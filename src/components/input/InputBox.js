import React from 'react';
import './InputBox.scss';

class InputBox extends React.Component {

    renderError({error,touched}) {
        if(touched && error) {
            return(
                <span className="input-box-error">{error}</span>
            )
        }
    }

    render() {
            return (
            <label className="input-box-label">
                <input className="input-box" placeholder={this.props.placeholder} type={this.props.type} {...this.props.input}/>
                {this.renderError(this.props.meta)}
            </label>
            )
        }
    }

export default InputBox;