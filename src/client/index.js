import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route }from 'react-router-dom';
import {Register} from '../client/containers';
import {Login} from '../client/containers';
import {MainPage} from '../client/containers';
import {Start} from '../client/containers';

import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux';
import reducers from '../client/reducers';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route path="/register" component={Register}/>
                <Route path="/login" component={Login}/>
                <Route path="/MainPage" component={MainPage}/>
                <Route path="/Start" component={Start}/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root'));