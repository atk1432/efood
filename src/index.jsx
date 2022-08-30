import React from 'react';
import { Provider, useSelector } from 'react-redux';
import ReactDOM from 'react-dom/client';
import Header from './Header/Header';
import Controller from './Controller/Controller';
import Body from './Body/Body';
import { 
    SliderContainer, 
    SectionContainer 
} from './Body/Container';
import { 
    BrowserRouter,
    Routes,
    Route,
    Outlet 
} from 'react-router-dom';
import ProductContainer from './Body/Product/ProductContainer';
import Cart from './Body/Cart/Cart';
import Login from './User/Login';
import Success from './Share/Log/Success';

// For authentication
import GoogleCallback from './User/googleCallback';
import Logout from './User/Logout';

// For config
import { apiOrigin } from './config';

import storeUser from './Redux/storeUser';

window.apiOrigin = apiOrigin; 


function Log() {

    const stack = useSelector(state => state.log.stack)

    return (
        <>
            {stack.map((e, i) => {
                if (e.type === 'success') {
                    return (
                        <Success key={i}>{ e.value }</Success>
                    )
                }
            })}
        </>
    );  
}


function App() {

    return (
        <Provider store={storeUser}>
            <Log />
            <Header />
            <Controller />
            <Outlet />
        </Provider>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <App /> }>
                <Route path="/" element={ <Body /> }>
                    <Route 
                        path="/"
                        element={<>
                            <SliderContainer />
                            <SectionContainer />
                        </>} 
                    />
                </Route>
                <Route path="/" element={ <Body container /> }>
                    <Route path='/products/:id' element={ <ProductContainer /> } />
                    <Route path="/cart" element={ <Cart /> } />
                </Route>
            </Route>
            <Route path="/login" element={ <Login /> } />
            <Route path='/login/google/redirect' element={ <GoogleCallback /> } />
            <Route path="/logout" element={ <Logout /> } />
        </Routes>
    </BrowserRouter>
);