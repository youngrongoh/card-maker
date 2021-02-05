import { useState } from 'react';
import './app.module.css';
import Login from './component/login/login';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

function App({ firebase }) {
  const [user, setUser] = useState({});

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login firebase={firebase} setUser={setUser} user={user} />
        </Route>
        <Route path="/" exact>
          {Object.keys(user).length === 0 ? (
            <Redirect to="/login" />
          ) : (
            <h1>hi</h1>
          )}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
