import React from 'react';
import './alert.scss';

const AlertBox = (message) => {

    return (
        <div className="alert">
            <p>
                {message}
            </p>
        </div>
    );
};

export default AlertBox;