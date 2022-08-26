import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
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

// For authentication
import GoogleCallback from './User/googleCallback';
import Logout from './User/Logout';

// For config
import { apiOrigin } from './config';

import storeUser from './Redux/storeUser';

window.apiOrigin = apiOrigin; 


function App() {

    return (
        <Provider store={storeUser}>
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
                    <Route path='/product/:id' element={ <ProductContainer /> } />
                    <Route path="/cart" element={ <Cart /> } />
                </Route>
            </Route>
            <Route path="/login" element={ <Login /> } />
            <Route path='/login/google/redirect' element={ <GoogleCallback /> } />
            <Route path="/logout" element={ <Logout /> } />
        </Routes>
    </BrowserRouter>
);