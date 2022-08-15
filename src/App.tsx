import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import './global.css';
import {Home} from './modules/Home';
import {Route} from './components';
import {Restaurant} from './modules/Restaurant';

const queryClient = new QueryClient();

export const App = () => (
	<QueryClientProvider client={queryClient}>
		<Route path='/home' component={Home} />
		<Route path='/restaurant' component={Restaurant} />
	</QueryClientProvider>
);
