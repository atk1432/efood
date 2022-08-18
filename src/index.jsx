import React from 'react';
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
                        element={
                            <>
                                <SliderContainer />
                                <SectionContainer />
                            </>
                        } 
                    />
                </Route>
                <Route path="/" element={ <Body container /> }>
                    <Route path='/product/:id' element={ <ProductContainer /> } />
                    <Route path="/cart" element={ <Cart /> } />
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
);