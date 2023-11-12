import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path='/' element={<ItemListContainer />} />
				<Route path='/category/:id' element={<ItemListContainer />} />
				<Route path='/item/:id' element={<><h3>Detalle de Item</h3></>}  />
				<Route path='*' element={<><h1>ERROR 404</h1></>}  />
			</Routes>
		</BrowserRouter>
	// <>
	// 	<NavBar />
	// 	<ItemListContainer greeting ="Bienvenido/a a DeltaTech"/>
	// </>
	);
};

export default App
