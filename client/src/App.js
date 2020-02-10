import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

// import pages
import Landing from './pages/Landing/Landing';

function App() {
  return (
    <Router>
      <div data-testid="app" className="App">
        <Switch>
          {/* put exact so that the component is only rendered when http://localhost/ */}
          <Route exact path='/' component={Landing}/>
          <Route path='/contact' component={Contact}/>
          
          <Route path='*' component={ErrorPage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
