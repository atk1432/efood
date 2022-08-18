import { useState, useContext, createContext } from 'react';
import Text from '../../Share/Text';
import PrepareOrder from './PrepareOrder';


const SectionContext = createContext();


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
                onClick={() => setCurrent(props.index)}
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


function Cart() {

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

    const [ current, setCurrent ] = useState(0);

    return (
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
                        if (current == 0)
                            return (
                                <PrepareOrder />
                            );
                    })() 
                }
            </div>
        </SectionContext.Provider>
    );
}

export default Cart;