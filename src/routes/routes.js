import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import CityInfos from '../pages/CityInfos';

const Routes = () => {
    return (
        <>
          <BrowserRouter>
              <Switch>
                  <Route exact path='/' component={Home}/>
                  <Route path='/forecast' component={CityInfos}/>
              </Switch>
          </BrowserRouter>
        </>
    )
}

export default Routes;