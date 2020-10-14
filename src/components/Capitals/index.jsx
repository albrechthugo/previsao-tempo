import React from 'react';

import './index.css';

const Capitals = () => {
    return (
        <div className="capitals__container">
            <h1>Capitais</h1>
            <div className="capitals__row">
                <div className="capitals__content">
                    <p>Min</p>
                    <p>Máx</p>
                </div>
                <div className="capitals__content">
                    <p>Min</p>
                    <p>Máx</p>
                </div>
            </div>
        </div>
    )
}

export default Capitals;