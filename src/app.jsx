import { useState } from 'react';
import styles from './app.module.css';
import Login from './component/login/login';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

function App({ authService }) {
  const [user, setUser] = useState({});

  return (
    <div className={styles.app}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login authService={authService} />
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
    </div>
  );
}

export default App;
