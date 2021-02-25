import { StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';

import './Global.css';
import { history, routes } from './router';
import { store } from './store';
import { theme } from './styles';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <Router history={history}>
          <Switch>
            {routes.map(({ path, component }, key) => (
              <Route exact path={path} component={component} key={key} />
            ))}
          </Switch>
        </Router>
      </StylesProvider>
    </ThemeProvider>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot !== undefined) {
  module.hot.accept();
}
