import React from "react";
import '../styles/button1.css'

function Button1({ text, isButonClick, manageClick }) {
    return (
        <button
            className={isButonClick ? 'button-click' : 'button-restart'}
            onClick={manageClick}>
            {text}
        </button>
    );
}

export default Button1;