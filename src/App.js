
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import Error from './components/Error';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Router>

        <Navbar brandname="Text Analysis" home="Home" About="About" Contact="Contact" />
        <div className="container my-4">
          {/* <Textarea heading="Text Analyzer"/> */}
          {/* <About/> */}
          <Switch>
            <Route exact path="/text-utilities/" component={Textarea}>
              
            </Route>
            <Route exact path="/text-utilities/about" component={About}>
              
            </Route>
            <Route exact path="/text-utilities/contact" component={Contact}>

            </Route>
            <Route component={Error}>

            </Route>

          </Switch>
        </div>
      </Router>

    </>
  );
}

export default App;
