import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header/Header';
import Controller from './Controller/Controller';


function App() {
	return <>
		<Header />
        <Controller />
	</>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);