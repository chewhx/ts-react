import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import App from './App';
import './assets/scss/styles.scss';

const client = new QueryClient();

ReactDOM.render(
	<QueryClientProvider client={client}>
		<Router>
			<App />
		</Router>
	</QueryClientProvider>,
	document.getElementById('app')
);
