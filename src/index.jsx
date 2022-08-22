import React, { useEffect } from 'react';
// import { Provider, useDispatch } from 'react-redux';
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

// For config
import { apiOrigin } from './config';

// For store user
// import storeUser from './Redux/storeUser';
// import { login } from './Redux/user';


window.apiOrigin = apiOrigin; 


function App() {

    return (
        <>
            <Header />
            <Controller />
            <Outlet />
        </>
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
        </Routes>
    </BrowserRouter>
);