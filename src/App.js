
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
<>
    <Router>

    <Navbar brandname="Text Analysis" home="Home" About="About" Contact="Contact"/>
    <div className="container my-4">
 {/* <Textarea heading="Text Analyzer"/> */}
 {/* <About/> */}
 <Switch>
 <Route path="/Home">
 <Textarea heading="Text Analyzer"/>  
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <Textarea heading="Text Analyzer"/>

          </Route>
        </Switch>
 </div>
 </Router>
 
  </>
    );
}

export default App;
