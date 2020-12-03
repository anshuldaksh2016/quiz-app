import React from 'react';
import { BrowserRouter as Router , Route , Redirect , Switch } from 'react-router-dom'
import NewPlace from './Places/pages/NewPlace';
import Users from './user/pages/Users';

const  App  = () => {
  return (
    <div className="App">
      return <Router>
      <Switch>
        <Route path="/" exact>
            <Users />
        </Route>
        <Route path="/places/new" exact>
            <NewPlace />
        </Route>
        {/* redirect to / */}
        <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
