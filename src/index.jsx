import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header/Header';
import Controller from './Controller/Controller';
import Body from './Body/Body';


function App() {
    return <>
        <Header />
        <Controller />
        <Body />
    </>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);