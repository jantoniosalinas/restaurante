import React from 'react';
import '../../node_modules/bulma/css/bulma.css';
import '../styles.css'

const Button = ({ buttonText, buttonRef, showModal }) => {
    return (
        <button
                className="button is-danger is-half modal-button"
                ref={buttonRef}
                onClick={showModal}>
                {buttonText}
        </button>
    )
}

export default Button;
