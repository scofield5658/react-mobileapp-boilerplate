import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import configureStore from './store';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import routes from './routes';

const syncHistoryWithStore = (store, history) => {
    const { routing } = store.getState();
    if(routing && routing.location) {
        history.replace(routing.location);
    }
};

const initialState = {
    user: {
      isLogin: false,
      username: ''
    }
};

const routerHistory = createBrowserHistory({
    basename: '/',             // The base URL of the app (see below)
    forceRefresh: false,      // Set true to force full page refreshes
    keyLength: 6,             // The length of location.key
    // A function to use to confirm navigation with the user (see below)
    getUserConfirmation: null
})

const store = configureStore(initialState, routerHistory);
syncHistoryWithStore(store, routerHistory);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={routerHistory}>
            {routes}
        </ConnectedRouter>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
