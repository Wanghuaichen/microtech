import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import Stocker from './components/Stocker/Stocker';
import Feedyard from './components/Feedyard/Feedyard';
import Dairy from './components/Dairy/Dairy';
import Integrator from './components/Integrator/Integrator';
import Contact from './components/Contact/Contact';
import Difference from './components/Difference/Difference';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Careers from './components/Careers/Careers';
import Policy from './components/Footer/PrivacyPolicy';



export default (
  <Switch>
    <Route exact path='/' component={ Home }/>

    <Route path ='/stocker' component={ Stocker }/>
    <Route path ='/feedyard' component={ Feedyard }/>
    <Route path ='/dairy' component={ Dairy }/>
    <Route path ='/integrator' component={ Integrator }/>
    <Route path ='/contact' component={ Contact }/>

    <Route path ='/difference' component={ Difference }/>
    <Route path ='/about' component={ About }/>
    <Route path ='/blog' component={ Blog }/>
    <Route path ='/careers' component={ Careers }/>

    <Route path ='/policy' component={Policy}/>
  </Switch>
);