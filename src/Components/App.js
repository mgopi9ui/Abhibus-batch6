import React, { Component } from 'react';
import Bus from './Bus/Bus';
import'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch,Route, Redirect } from 'react-router-dom';
import Trains from './Trains';
import Hotels from './Hotels';
import Header from './Header/Header';
import MyBookings from './My Bookings';
import pagenotfound from './pagenotfound';
import Login from './Login';
import Buslist from './Buslist/Buslist';

export default class App extends Component {
  constructor(){
    super();
    this.state={}
  }
  
  render() {
    return (
      <div >
       <Router>
        <Header />
        <Switch>
          <Route  path="/bus" component={Bus} />
          <Route path="/trains" component={Trains} />
           <Route path="/hotels" component={Hotels} />
           <Route path="/mybookings" component={MyBookings} />
           <Route path="/bus_search/:source/:destination/:doj" component={Buslist}/>
           <Route exact path="/" component={Login} />
           <Route path="/pagenotfound" component={pagenotfound}/>
           <Redirect to ="/Pagenotfound" />
        </Switch>
       </Router>
      
      </div>
    )
  }
}
