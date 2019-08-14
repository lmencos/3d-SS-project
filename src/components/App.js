import React from 'react';
import './styles/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home  from '../pages/Home';
import ContactUs  from '../pages/ContactUs';
import Gallery  from '../pages/Gallery';
import Projects  from '../containers/Projects';
import Mask  from '../containers/Mask';
import SignIn  from '../pages/SignIn';

const app = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/home/contactus" component={ContactUs} />
        <Route exact path="/home/gallery" component={Gallery} />
        <Route exact path="/home/projects" component={Projects} />
        <Route exact path="/home/signin" component={SignIn} />
        <Route exact path="/home/mask" component={Mask} />
      </Switch>
    </BrowserRouter>
  );
};
export default app;

