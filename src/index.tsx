import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import LoginForm from './components/Molecules/LoginForm';
import CssBaseline from '@material-ui/core/CssBaseline';

const renderLoginForm = (url: string) => () => <LoginForm url={url} />;

ReactDOM.render(
  <Router>
    <CssBaseline />
    <Route path="/" exact={true} component={App} />
    <Route
      path="/login"
      exact={true}
      render={renderLoginForm('https://fe31b056.ngrok.io/trecamp-server/us-central1/api/login')}
    />
    <Route
      path="/login_production"
      exact={true}
      render={renderLoginForm('https://trecamp-server.web.app/login')}
    />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
