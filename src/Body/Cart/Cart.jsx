import { useState, useContext, createContext } from 'react';
import { Provider } from 'react-redux';
import store from '../../Redux/store';
import Text from '../../Share/Text';
import PrepareOrder from './PrepareOrder';
import Ordering from './Ordering/Ordering';
import Cookies from 'js-cookie';


export const SectionContext = createContext();


function CartSection(props) {

    const [ enter, setEnter ] = useState(false)

    const { current, setCurrent } = useContext(SectionContext);

    return (
        <div 
            className="col col-4 text-center cursor-pointer position-relative"
        >
            <i 
                className={`fa-solid ${props.icon} d-block py-4 fs-4 ${props.color} transition`}
                onMouseEnter={() => setEnter(true)}
                onMouseLeave={() => setEnter(false)}
                onClick={() => {
                    setCurrent(props.index);
                    Cookies.set('cart_current', props.index);
                }}
                style={enter || current == props.index ? {
                    background: '#eaeaea',
                    borderRadius: 20,
                } : {}}
            >    
            </i>
            { props.children }
        </div>
    );
}


export default function Cart() {

    const sections = [
        { 
            icon: 'fa-truck', 
            color: 'text-warning'
        },
        {
            icon: 'fa-circle-check',
            color: 'text-success'
        }
    ];

    const [ current, setCurrent ] = useState(() => {
        var current = Cookies.get('cart_current');

        if (current) {
            return parseInt(current);
        } else {
            return 1;
        }
    });


    return (
        <Provider store={store}>
            <SectionContext.Provider value={{ current, setCurrent }}>
                <div className="col col-12">
                    <Text weight={900} size={32}>Giỏ hàng</Text>
                </div>
                <div className="col col-12 mt-5">
                    <div className="row">
                        <CartSection 
                            key={0} index={0}
                            icon='fa-cart-shopping' color="text-info"
                        >
                            <div 
                                className="position-absolute rounded-pill transition    "
                                style={{
                                    width: '70%',
                                    left: `calc(${current * 100}% + 16%)`,
                                    height: 6,
                                    bottom: 0,
                                    background: 'var(--bs-danger)',
                                    zIndex: 2
                                }}
                            ></div>
                        </CartSection>
                        {sections.map((section, index) => 
                            <CartSection 
                                key={index + 1} 
                                index={index + 1}
                                icon={section.icon}
                                color={section.color} 
                                setCurrent={setCurrent}
                            />
                        )}
                    </div>
                </div>
                <div className="col col-12 mt-5">
                    {
                        (function () {
                            const components = [
                                <PrepareOrder />,
                                <Ordering />
                            ];

                            return (
                                <>
                                    {components.map((component, index) => 
                                        <div 
                                            className="row"
                                            key={index}
                                            style={{
                                                display: current === index ? 'flex' : 'none'
                                            }}
                                        >
                                            { component }
                                        </div>
                                    )}
                                </>
                            )
                        })() 
                    }
                </div>
            </SectionContext.Provider>
        </Provider>
    );
}

// export default Cart;