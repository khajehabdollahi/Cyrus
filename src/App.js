import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Drinks from './Drinks'
import Gnav from './Navbar'
import Home from './Home'
import Food from './Food'
import Footer from './Footer'
import Map from './Map'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Gnav />
        <div className="content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Food" component={Food}/>
            <Route path="/Drinks" component={Drinks}/>     
            <Route path="/Address" component={Map}/>     
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
