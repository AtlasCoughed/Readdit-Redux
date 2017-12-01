import React from 'react';
import ReactDOM from 'react-dom';
import './app/index.css';

import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {
	BrowserRouter as Router,
	Route, Switch,
} from 'react-router-dom'
import configureStore from './store/configureStore';
import PostDetails from "./detailPost/PostDetails";

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Switch>
			<Route exact path="/" component={App}/>
			<Route path="/posts" component={PostDetails}/>
			</Switch>
		</Router>
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();
