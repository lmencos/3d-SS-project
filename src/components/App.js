import React from 'react';
import './styles/App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home  from '../pages/Home';
import ContactUs  from '../pages/ContactUs';
import Gallery  from '../pages/Gallery';
import Projects  from '../containers/Projects';
import Mask  from '../containers/Mask';
import SignIn  from '../pages/SignIn';
import Layout from '../components/Layout';
import NotFound from '../pages/NotFound';

const app = () => {
  return (
    <BrowserRouter>
      {/* <Layout> */}
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/contactus" component={ContactUs} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/mask" component={Mask} />
          <Route path="/404" component={NotFound} />
          <Redirect from="*" to="/404" />
        </Switch>
      {/* </Layout> */}
    </BrowserRouter>
  );
};
export default app;

