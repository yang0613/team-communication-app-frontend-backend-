import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './Home';
import Login from './Login';

/**
 *
 * @return {App}
 */
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
