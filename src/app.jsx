import './app.css';
import Login from './login/login';

function App({ authService }) {
  return <Login authService={authService} />;
}

export default App;
