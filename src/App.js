// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import React from 'react';
import Sidebar from './components/Sidebar';
import { About } from './About';
import  Externships  from './Externships';
import { Resources } from './Resources';
import  ContactForm  from './ContactForm';
// import { NoMatch } from './NoMatch';


function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
          <Switch>
            <Route exact path="/" component={About} />
            <Route path ="/externships" component={Externships} />
            <Route path ="/resources" component={Resources} />
            <Route path = "/contactForm" component={ContactForm} />
            {/* <Route component={NoMatch} /> */}
          </Switch>
          <Sidebar>

          </Sidebar>
      </Router>
    </React.Fragment>
  );
}

export default App;
