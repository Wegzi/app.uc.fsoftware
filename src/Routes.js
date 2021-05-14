import { BrowserRouter, Switch, Route } from 'react-router-dom';

import React from 'react';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import { Header } from './Components/layout/Header';
import { Footer } from './Components/layout/Footer';
import Services from './pages/Service/Services';
import Service from './pages/Service/Service';
import Home from './pages/Home/Home';
import Purchase from './pages/Purchase/Purchase';
import Signup from './pages/Signup/Signup';
import Help from './pages/Info/Help';
import About from './pages/Info/About';
import ServiceTracking from './pages/Service/ServiceTracking';

export default function Routes() {
  return (
    <BrowserRouter basename=''>
      <div className='h-full flex flex-col overflow-hidden'>
        <Route path='/' component={Header} />
        <div className='h-full overflow-auto'>
          <Switch>
            <Route exact path='/login'>
              <Login />
            </Route>
            <Route exact path='/signup'>
              <Signup />
            </Route>
            <Route exact path='/home' render={Home} />
            <Route exact path='/' render={Home} />
            <Route exact path='/profile'>
              <Profile />
            </Route>
            <Route exact path='/services' render={Services} />
            <Route exact path='/services/:service_id'>
              <Service />
            </Route>
            <Route exact path='/services/:service_id/purchase'>
              <Purchase />
            </Route>
            <Route exact path='/services/:service_id/track'>
              <ServiceTracking />
            </Route>
            <Route exact path='/help' render={Help} />
            <Route exact path='/about' render={About} />
          </Switch>
        </div>
        <Route path='/' component={Footer} />
      </div>
    </BrowserRouter>
  );
}
