import React from 'react';

import './index.css';

import capitals from '../../utils/capitals';
import request from '../../services/api';

const Capitals = () => {
    return (
        <div className="capitals__container">
            <h1>Previsão nas capitais</h1>
            <div className="capitals__row">
                <div className="capitals__content">
                    <p>Rio de Janeiro</p>
                    <span>15°</span>
                    <span>28°</span>
                </div>
            </div>
        </div>
    )
}

export default Capitals;