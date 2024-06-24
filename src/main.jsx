import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import State from './State';
import FetchApi from './FetchApi';
import Header from './Header';
import FetchApiByIdRoute from './FetchApiByIdRoute';

import store from './store/reducer';
import Articles from './Articles';
import { Provider } from 'react-redux';
import Article from './Article';

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<BrowserRouter>
			<Header />

			<Routes>
				{/* <Route path='/' element={<Header />} /> */}
				<Route path='/' element={<App />} />
				<Route path='/form' element={<State />} />
				<Route path='/toDos' element={<FetchApi />} />
				<Route path='/toDos/:id' element={<FetchApiByIdRoute />} />
				<Route path='/articles' element={<Articles />} />
				<Route path='/updateArticle/:id' element={<Article />} />
				<Route path='*' element={<div>404</div>} />
			</Routes>
		</BrowserRouter>
	</Provider>,
);
