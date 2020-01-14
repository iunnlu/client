import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reducers from './components/reducers';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import Welcome from './components/Welcome';
import Signup from './components/auth/Sİgnup';

const store = createStore(
    reducers,
    {},
    applyMiddleware(reduxThunk)
)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Route path="/" exact component={Welcome} />
                <Route path="/signup" component={Signup} />
            </App>
        </BrowserRouter>
    </Provider>,
    document.querySelector("#root")
)