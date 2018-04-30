import * as React from 'react';
import { Route } from 'react-router-dom';
import { AppLayout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Login } from './components/Login';

export const routes = <AppLayout>
    <Route exact path='/' component={ Home } />
    <Route path='/counter' component={ Counter } />
    <Route path='/fetchdata' component={ FetchData } />
    <Route path='/login' component={ Login } />
</AppLayout>;
