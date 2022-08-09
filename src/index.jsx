import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header/Header';


function App() {
	return <>
		<Header />
	</>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);