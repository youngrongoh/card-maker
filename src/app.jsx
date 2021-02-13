import styles from './app.module.css';
import Login from './component/login/login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Maker from './component/maker/maker';

function App({ authService, FileInput }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route path="/maker">
            <Maker authService={authService} FileInput={FileInput} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
