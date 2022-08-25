import { useState, useEffect, useRef, useContext, createContext } from 'react';
import { useSelector } from 'react-redux';
import { Header, Body } from '../../Share/Container';
import Image from '../../Share/Image';
import Text from '../../Share/Text';
import StarsReview from './StarsReview';
import styles from '../../Asset/Css/Comment.module.css';
import axios from '../../axiosApi';


const ProductIdContext = createContext();


function ButtonInteraction(props) {

    return (
        <button 
            className={styles.CommentContent__InteractionButton}
            style={props.value ===  props.check ? {
                backgroundColor: 'var(--bs-primary)',
                color: '#fff'
            } : {}}
            onClick={() => {
                if (props.value ===  props.check)
                    props.setLike('');
                else
                    props.setLike(props.check);
            }}
        >
            { props.children }
        </button>
    )
}

function ButtonInteractions()  {

    const [ like, setLike ] = useState();

    return (
        <>
            <ButtonInteraction 
                setLike={setLike}
                value={like}
                check='like'
            >
                12
                <i className="fa-solid fa-thumbs-up ms-2"></i>
            </ButtonInteraction>
            <ButtonInteraction 
                setLike={setLike}
                value={like}
                check='dislike'
            >
                12
                <i className="fa-solid fa-thumbs-down ms-2"></i>
            </ButtonInteraction>
        </>
    );
}


function CommentHeader(props) {

    return (
        <div className="Comment my-4 d-flex">
            <Image
                width={props.imageSize ?? 45}
                height={props.imageSize ?? 45}
                src="https://cdn0.iconfinder.com/data/icons/profession-and-occupation-icons/110/avatar_occupation_profile_cook_kitchener_flunkey_food-512.png" 
            />
            <div className="CommentContent w-100 ms-3">
                <div className="CommentContent__User">
                    <Text weight={900} className="me-2">
                        { props.name }
                    </Text>
                    <Text size={14} opacity={0.6} className="me-2">
                        { props.createdAt ?? '' }
                    </Text>
                </div>
                { props.children }
            </div>
        </div>
    );
} 


function CommentResponse(props) {

    const [ show, setShow ] = useState(false);

    // console.log(props.response);

    return (
        <div className="CommentContent__Response my-3 cursor-pointer">
            <Text 
                weight={900}
                onClick={() => setShow(!show)}
                display='inline-block'
            >
                {show ? 
                    <i className="fa-solid fa-angle-up me-2"></i> :
                    <i className="fa-solid fa-angle-down me-2"></i>
                }
                { props.amount } phản hồi
            </Text>
            {show ?
                props.response.map((comment, index) => 
                    <Comment
                        key={ index }
                        name={ comment.name }
                        comment={ comment.comment }
                        response={ comment.response }
                        responseMode
                    />
                ) : <></>
            }
        </div>
    );
}


function Comment(props) {

    const [ responses, setResponses ] = useState([]); // For fetch API response
    const [ response, setResponse ] = useState(false); // For write response


    return (
        <CommentHeader 
            name={props.name} 
            imageSize={props.responseMode ? props.imageSize : null}
        >
            {!props.responseMode ? 
                <div className="CommentContent__Review">
                    <Text size={14} opacity={0.6}>
                        <StarsReview rate={4.5} />
                        <span className="ms-2">4.5</span>
                    </Text> 
                </div> : <></>
            }
            <div className="CommentContent__Info">
                <div>{ props.comment }</div>
            </div>
            <div className="CommentContent__Interaction mt-3 d-flex flex-wrap"> 
                <ButtonInteractions />
                <span 
                    className="cursor-pointer"
                    onClick={() => setResponse(!response)}
                >
                    Phản hồi
                </span>
            </div>
            {response ?
                <WriteComment responseMode /> : <></>
            }
            {responses.length !== 0 ?  
                <CommentResponse 
                    amount={props.responses} 
                    response={responses}
                /> : <></>
            }
        </CommentHeader>
    );
}


function CommentStars(props) {

    const [ stars, setStars ] = useState('');

    return (
        <div style={{
            fontSize: 18,
            marginBottom: 10,
            textAlign: 'center'
        }}>
            <span className="fw-bold mb-3 d-inline-block">Bạn đánh giá như thế nào?</span>
            <div>
                {                            
                    Array(5).fill(0).map((item, index) => {
                        return (
                            <i 
                                key={index} 
                                className={`
                                    ${stars >= index + 1 ? 'fa-solid' : 'far'}
                                    fa-star
                                    text-warning cursor-pointer me-2 fs-4
                                `}
                                onClick={() => {
                                    setStars(index + 1);
                                    props.setHidden(true);
                                    props.rate.current = index + 1;
                                }}
                            ></i>
                        )
                    })
                }
                <span className="ms-2">{ stars }</span>
            </div>
        </div>
    );
}


function CommentInput(props) {

    const [ focus, setFocus ] = useState(false);
    const [ value, setValue ] = useState();
    const [ hasValue, setHasValue ] = useState(false);
    const [ hidden, setHidden ] = useState(false);
    const productId = useContext(ProductIdContext);
    const inputElement = useRef();
    const rate = useRef(0);


    return (
        <>
            {props.responseMode ? 
                <CommentStars setHidden={setHidden} rate={rate} />  : <></>
            }
            {hidden ? 
            <>
                <div 
                    className={styles.CommentInput}
                    style={focus ? {
                        opacity: 1,
                    } : {}}
                >
                    <div 
                        ref={inputElement}
                        style={{
                            outline: 0,
                            position: 'relative',
                            zIndex: 2
                        }}
                        contentEditable="true"
                        onInput={() => {
                            // console.log(inputElement)
                            if (inputElement.current.innerText) {
                                setHasValue(true)
                            } else {
                                setHasValue(false);
                            }
                        }}
                        onFocus={() => setFocus(true)}
                        onBlur={() => 
                            setTimeout(() => {
                                setFocus(false)
                            }, 100)
                        }
                    >
                    </div>
                    {!hasValue ? 
                        <span 
                            className='position-absolute top-0'
                            style={{
                                zIndex: 1
                            }}
                        >
                            Viết bình luận
                        </span> :
                        <></>
                    }
                </div>
                {focus ? 
                    <div className="d-flex justify-content-end mt-2 fw-bold">
                        <Text 
                            className="me-2 cursor-pointer"
                        >
                            Hủy
                        </Text>
                        <Text 
                            className="cursor-pointer"
                            onClick={(e) => {
                                if (inputElement.current.innerText.length &&
                                    rate.current != 0
                                ) {
                                    // setValue(inputElement.current.innerText);
                                    axios.post(
                                        `/products/${productId}/comments`, 
                                        {
                                            'comment': inputElement.current.innerText,
                                            'rate': rate.current
                                        }
                                    ).then(response => 
                                        console.log(response.data)
                                    );
                                }
                            }}
                        >
                            Đồng ý
                         </Text>
                    </div> : <></> 
                }
            </> : <></>}
        </>
    );
}


function WriteComment(props) {

    const avatar = useSelector(state => state.user.image);

    return (
        <div className="Comment my-4 d-flex">
            <div className="CommentContent ms-3 w-100">
                <CommentInput responseMode={props.responseMode} />
            </div>
        </div>
    );
}


function Comments(props) {

    const [ comments, setComments ] = useState([]);

    const [ loaded, setLoaded ] = useState(true);

    useEffect(() => {
        
        axios.get(window.apiOrigin + `/api/products/${props.productId}/comments`)
            .then(response => {
                setComments(response.data)
                setLoaded(true);
            })

    }, [])

    return (
        <ProductIdContext.Provider value={props.productId}>
            <Header>
                <Text weight={900} size={22}>Bình luận</Text>
            </Header>
            {loaded ?
                <Body>
                    <WriteComment name='You' responseMode={true} />
                    {comments.length != 0 ?
                        comments.map((comment, index) => 
                            <Comment 
                                key={ index }
                                name={ comment.name }
                                comment={ comment.comment }
                                // response={ comment.response }
                            />) :
                        <i>Không có bình luận</i>
                    }
                </Body> :
                <div className="text-center mt-4">
                    <div className="spinner-border" role="status">
                    </div>
                </div>
            }
        </ProductIdContext.Provider>
    );
}

export default Comments;