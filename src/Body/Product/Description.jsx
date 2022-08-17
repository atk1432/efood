import { useState, useRef } from 'react';
import { Header, Body} from '../../Share/Container';
import Text from '../../Share/Text';


function Description(props) {

    const [ more, setMore ] = useState(false);

    return (
        <>
            <Header>
                <Text weight={900} size={22}>Mô tả</Text>
            </Header>
            <Body className="position-relative" style={
                !more ? {
                    maxHeight: 100,
                    overflow: 'hidden'
                } : {}
            }>
                <Text size={17}>
                    <div>
                        { props.children }
                    </div>
                </Text>
                <div 
                    className="w-100 h-100 position-absolute top-0 start-0"
                    style={!more ? {
                        background: 'linear-gradient(360deg, white, transparent)',
                        opacity: 0.8
                    } : {}}
                >
                </div>
                <div 
                    className="position-absolute w-100 start-0 text-center"
                    style={!more ? {
                        bottom: 0
                    } : {
                        bottom: -28
                    }}
                >
                    <Text 
                        className="bg-light cursor-pointer"
                        onClick={() => {
                            setMore(!more);
                            if (more)
                                props._ref.current.scrollIntoView()
                        }}
                    >
                        {!more ?
                            <>
                                <i className="fa-solid fa-angle-down me-2"></i>
                                Đọc thêm
                            </> :
                            <>
                                <i className="fa-solid fa-angle-up"></i>
                                Thu gọn
                            </>
                        }
                    </Text> 
                </div>
            </Body>
        </>
    );
}

export default Description;