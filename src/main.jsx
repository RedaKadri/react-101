import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import State from './State';
import FetchApi from './FetchApi';
import Header from './Header';
import FetchApiByIdRoute from './FetchApiByIdRoute';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Header />

			<Routes>
				{/* <Route path='/' element={<Links />} /> */}
				<Route path='/' element={<App />} />
				<Route path='/form' element={<State />} />
				<Route path='/toDos' element={<FetchApi />} />
				<Route path='/toDos/:id' element={<FetchApiByIdRoute />} />
				<Route path='*' element={<div>404</div>} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
);
