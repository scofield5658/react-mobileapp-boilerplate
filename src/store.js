import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { routerMiddleware, routerReducer as routing } from 'react-router-redux';
import thunk from 'redux-thunk';

import user from './reducers/user';

export default function configureStore(initialState, routerHistory) {
    const router = routerMiddleware(routerHistory);

    const reducers = {
        user,
        routing
    };

    const middlewares = [ thunk, router ];

    const enhancer = compose(applyMiddleware(...middlewares));
    const rootReducer = combineReducers(reducers);

    return createStore(rootReducer, initialState, enhancer);
}