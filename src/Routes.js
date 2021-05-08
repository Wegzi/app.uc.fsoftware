import { BrowserRouter, Switch, Route } from 'react-router-dom';

import React from 'react';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import { Header } from './Components/layout/Header';
import { Footer } from './Components/layout/Footer';
import Search from './pages/Service/Search';
import Service from './pages/Service/Service';
import Home from './pages/Home/Home';

export default function Routes() {
  return (
    <BrowserRouter basename=''>
      <div className='h-full flex flex-col overflow-hidden'>
        <Route path='/' component={Header} />
        <div className='h-full overflow-auto'>
          <Switch>
            <Route exact path='/login' render={Login} />
            <Route exact path='/home' render={Home} />
            <Route exact path='/profile' render={Profile} />
            <Route exact path='/services' render={Search} />
            <Route exact path='/services/:service_id' render={Service} />
          </Switch>
        </div>
        <Route path='/' component={Footer} />
      </div>
    </BrowserRouter>
  );
}
