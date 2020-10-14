import React from 'react';

import Title from '../../components/Title';
import InputSearch from '../../components/InputSearch';
import Separator from '../../components/Separator';
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

const Home = () => {
    return (
        <>
            <div className="home__container" style={containerStyle}>
                <Title/>
                <InputSearch/>
                <Separator/>
                <Capitals/>
            </div>
        </>
    )
}

export default Home;