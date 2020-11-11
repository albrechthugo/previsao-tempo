import React from 'react';

import Title from '../../components/Title';
import InputSearch from '../../components/InputSearch';
import Separator from '../../components/Separator';
import Forecast from '../../components/Forecast';
import Capitals from '../../components/Capitals';

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '0rem'
}

const CityInfos = () => {
    return (
        <>
            <div className="forecast__container" style={containerStyle}>
                <Title/>
                <Forecast/>
                <Separator/>
                <Capitals/>
            </div>
        </>
    )
}

export default CityInfos;