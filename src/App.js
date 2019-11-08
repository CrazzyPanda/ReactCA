import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home.js'
import Navigate from './components/Navigate.js'
import Film from './components/Film.js'
import People from './components/People.js'
import Species from './components/Species.js'
import Location from './components/Location.js'
import Vehicle from './components/Vehicle.js'
import Footer from './components/Footer.js'

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <Navigate />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Film.js" component={Film} />
          <Route exact path="/People.js" component={People} />
          <Route exact path="/Species.js" component={Species} />
          <Route exact path="/Location.js" component={Location} />
          <Route exact path="/Vehicle.js" component={Vehicle} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}
//NOTE: exact will make sure slash shows home but doesn't come up for /about and /contact aswell

export default App;
