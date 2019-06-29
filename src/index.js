import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from '../src/components/Navbar';
import Gallery from '../src/pages/Gallery';
import Projects from '../src/pages/Projects';
import ContactUs from '../src/pages/ContactUs';
import SignIn from '../src/pages/SignIn';


ReactDOM.render(

  <BrowserRouter>
  <NavBar  />
    <Switch>
    <Route exact path="/" component={App}/>
    <Route exact path="/gallery" component={Gallery} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/contactUs" component={ContactUs} />
    <Route exact path="/signIn" component={SignIn} />
    </Switch>
  </BrowserRouter>,

document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
