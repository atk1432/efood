import { useState } from 'react';
import Text from '../../Share/Text';


function Description(props) {

    const [ more, setMore ] = useState(false);

    return (
        <>
            <div className="col col-12 mt-5">
                <Text weight={900} size={22}>Mô tả</Text>
            </div>
            <div className="col col-12 mt-2 position-relative" style={
                !more ? {
                    maxHeight: 100,
                    overflow: 'hidden'
                } : {}
            }>
                <Text size={17}>
                    { props.children }
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
                        onClick={() => setMore(!more)}
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
            </div>
        </>
    );
}

export default Description;