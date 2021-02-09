import { useState } from 'react';
import styles from './app.module.css';
import Login from './component/login/login';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Contents from './component/contents/contents';

function App({ authService }) {
  const [user, setUser] = useState({});

  return (
    <div className={styles.app}>
      <Router>
        음..
        <Switch>
          <Route path="/" exact>
            {Object.keys(user).length === 0 ? (
              <Login authService={authService} setUser={setUser} />
            ) : (
              <Redirect to="/app" />
            )}
          </Route>
          <Route path="/app">
            {Object.keys(user).length !== 0 ? (
              <Contents authService={authService} setUser={setUser} />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
