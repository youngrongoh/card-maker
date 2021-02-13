import styles from './app.module.css';
import Login from './component/login/login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Maker from './component/maker/maker';

function App({ FileInput, authService, database }) {
  return (
    <div className={styles.app}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Login authService={authService} />
          </Route>
          <Route path="/maker">
            <Maker
              authService={authService}
              FileInput={FileInput}
              database={database}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
