import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './redux/store';
import  './style/_globalStyles.scss';
// Create browser history to use in the Redux store
//const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') as string;
//const history = createBrowserHistory({ basename: baseUrl });
const store = configureStore();
// Get the application-wide store instance, prepopulating with state from the server where available.
ReactDOM.render(
  <Provider store={store}>
    <App  />
  </Provider>,

  document.getElementById('root'),
);

registerServiceWorker();
