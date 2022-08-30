import { useState, useEffect, useRef, useContext, createContext, memo } from 'react';
import { useSelector } from 'react-redux';
import { Header, Body } from '../../Share/Container';
import Image from '../../Share/Image';
import Text from '../../Share/Text';
import StarsReview from './StarsReview';
import styles from '../../Asset/Css/Comment.module.css';
import axios from '../../axiosApi';


const ProductIdContext = createContext();
const CommentsContext = createContext();


function ButtonInteraction(props) {

    return (
        <button 
            className={styles.CommentContent__InteractionButton}
            style={props.value ===  props.check ? {
                backgroundColor: 'var(--bs-primary)',
                color: '#fff'
            } : {}}
            onClick={() => {
                if (props.value ===  props.check) {
                    props.setLike('');
                    props.onBlur();

                } else {
                    props.setLike(props.check);
                    props.onFocus();

                }
            }}
        >
            { props.children }
        </button>
    )
}

function ButtonInteractions(props)  {

    const [ like, setLike ] = useState();
    const likeNumber = useRef(props.like ?? 0);
    const dislikeNumber = useRef(props.dislike ?? 0);

    useEffect(() => {
        if (props.econ === 'like' || props.econ === 'dislike') {
            setLike(props.econ);
        }
    }, [])

    useEffect(() => {

        var verb = props.responseMode ? 'response' : 'comment';
        
        // const execute = () => {
        //     if (props.getData) props.getData()
        // };

        if (like === 'like') {
            axios.post(`/sendEcon/${verb}`, {
                like: 'like',
                id: props.id 
            }).then(response => {});
        } else if (like === 'dislike') {
            axios.post(`/sendEcon/${verb}`, {
                like: 'dislike',
                id: props.id 
            }).then(response => {});
        } else if (like === '') {
            axios.post(`/sendEcon/${verb}`, {
                like: '',
                id: props.id 
            }).then(response => {});
        }


    }, [like])

    return (
        <>
            <ButtonInteraction 
                setLike={setLike}
                value={like}
                check='like'
                id={props.id}
                onFocus={() => {
                    likeNumber.current += 1
                    if (like == 'dislike') {
                        dislikeNumber.current -= 1;
                    }
                }}
                onBlur={() => {
                    likeNumber.current -= 1
                }}
            >
                { likeNumber.current }
                <i className="fa-solid fa-thumbs-up ms-2"></i>
            </ButtonInteraction>
            <ButtonInteraction 
                setLike={setLike}
                value={like}
                check='dislike'
                id={props.id}
                onFocus={() => {
                    dislikeNumber.current += 1
                    if (like == 'like') {
                        likeNumber.current -= 1;
                    }
                }}
                onBlur={() => {
                    dislikeNumber.current -= 1
                }}
            >
                { dislikeNumber.current }
                <i className="fa-solid fa-thumbs-down ms-2"></i>
            </ButtonInteraction>
        </>
    );
}


function CommentHeader(props) {

    return (
        <div 
            className="Comment my-4"
            style={{
                display: props.display ? 'flex' : 'none'
            }}
        >
            <Image
                width={props.imageSize ?? 45}
                height={props.imageSize ?? 45}
                className="rounded-circle"
                src={props.avatar} 
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
    // const [ responses, setResponses ] = useState([]);

    const getData = () => {
        if (props.responses.length === 0) {
            if (!props.responseMode) {
                axios.get(`/responses/${props.id}/comment`)
                .then(response => 
                    props.setResponses(responses => 
                        [...props.responses, ...response.data])
                ) 
            } else {
                axios.get(`/responses/${props.id}/response`)
                .then(response => 
                    props.setResponses(responses => 
                        [...props.responses, ...response.data])
                )
            }
        }
    }

    return (
        <div className="CommentContent__Response my-3 cursor-pointer">
            <Text 
                weight={900}
                onClick={() => {
                    getData();
                    setShow(!show)
                }}
                display='inline-block'
            >
                {show ? 
                    <i className="fa-solid fa-angle-up me-2"></i> :
                    <i className="fa-solid fa-angle-down me-2"></i>
                }
                { props.amount } phản hồi
            </Text>
            {
                props.responses.map((comment, index) => 
                    <Comment
                        key={ comment.id }
                        id={ comment.id }
                        name={ comment.user.name }
                        avatar={ comment.user.image }
                        comment={ comment.comment }
                        countResponse={ comment.countResponse }
                        like={ comment.like }
                        econ={ comment.econ }
                        dislike={ comment.dislike }
                        imageSize={ 34 }
                        responseMode
                        display={show}
                    />
                )
            }
        </div>
    );
}


function Comment(props) {

    const [ responses, setResponses ] = useState([]); // For fetch API response
    const [ response, setResponse ] = useState(false); // For write response
    const repStatus = useRef(); // Yep, i don't know how name it :)))
    const user = useSelector(state => state.user.name);

    useEffect(() => {
        if (props.responseMode) {
            repStatus.current = true;
        }
    }, [])

    return (
        <CommentHeader 
            name={ props.name } 
            avatar={ props.avatar }
            imageSize={props.responseMode ? props.imageSize : null}
            display={props.display ?? true}
        >
            {!props.responseMode ? 
                <div className="CommentContent__Review">
                    <Text size={14} opacity={0.6}>
                        <StarsReview rate={ props.rate } />
                        <span className="ms-2 fw-bold">{ props.rate }</span>
                    </Text> 
                </div> : <></>
            }
            <div className="CommentContent__Info">
                <div>
                    { props.comment.split('\n').map((line, index) => 
                        <span key={index}>
                            { line }
                            <br />
                        </span>
                    ) }
                </div>
            </div>
            <div className="CommentContent__Interaction mt-3 d-flex flex-wrap"> 
                <ButtonInteractions 
                    like={props.like} 
                    dislike={props.dislike} 
                    econ={props.econ}
                    id={props.id}
                    responseMode={props.responseMode}
                    getData={props.getData}
                />
                { user ? <span 
                    className="cursor-pointer"
                    onClick={() => {
                        setResponse(!response)
                    }}
                >
                    Phản hồi
                </span> : <></>
                }
            </div>
            {response ?
                <WriteComment 
                    responseMode 
                    setResponses={setResponses}
                    repStatus={repStatus}
                    id={props.id}
                /> : <></>
            }
            {props.countResponse || responses.length > 0 ?  
                <CommentResponse 
                    id={props.id}
                    amount={props.countResponse + (
                        (responses.length == 0 ? props.countResponse : responses.length) - props.countResponse)
                    } 
                    responses={responses}
                    repStatus={repStatus}
                    setResponses={setResponses}
                    responseMode={props.responseMode}
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
            textAlign: props.responseMode ? '' : 'center'
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
                                    props.setHidden(false);
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
    // const [ value, setValue ] = useState();
    const [ hasValue, setHasValue ] = useState(false);
    const [ hidden, setHidden ] = useState(props.hidden ?? true);
    const user = useSelector(state => state.user);

    const productId = useContext(ProductIdContext);
    const setComments = useContext(CommentsContext);

    const inputElement = useRef();
    const rate = useRef(0);

    useEffect(() => {

        const blur = () => {
            window.removeEventListener('click', blur);
            setFocus(false);        
        }

        window.addEventListener('click', blur);

    }, [])

    return (
        <>
            {!props.responseMode ? 
                <CommentStars 
                    responseMode={props.responseMode} 
                    setHidden={setHidden} 
                    rate={rate}     
                />  : <></>
            }
            {!hidden || props.responseMode ? 
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
                            borderBottom: '1px solid',
                            zIndex: 2
                        }}
                        contentEditable="true"
                        onInput={(e) => {
                            if (inputElement.current.innerText) {
                                setHasValue(true)
                            } else {
                                setHasValue(false);
                            }
                        }}
                        onClick={(e) => {
                            e.stopPropagation();
                            setFocus(true)
                        }}
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
                            onClick={(e) => {
                                e.stopPropagation();
                                setHasValue(false);
                                inputElement.current.innerHTML = '';
                            }}
                        >
                            Hủy
                        </Text>
                        <Text 
                            className="cursor-pointer"
                            onClick={(e) => {
                                e.stopPropagation();
                                if (inputElement.current.innerText.length 
                                ) {
                                    if (!props.responseMode) {
                                        axios.post(
                                            `/products/${productId}/comments`, 
                                            {
                                                'comment': inputElement.current.innerText,
                                                'rate': rate.current
                                            }
                                        ).then(response => {
                                            setComments(comments => [ 
                                                {
                                                    id: response.data.id,
                                                    user: {
                                                        name: 'You',
                                                        image: user.image
                                                    },
                                                    comment: inputElement.current.innerText,
                                                    rate: rate.current,
                                                    like: 0,
                                                    dislike: 0,
                                                    econ: null,
                                                    countResponse: 0
                                                },
                                                ...comments
                                            ])
                                            inputElement.current.innerText = '';
                                            setHasValue(false);
                                        });
                                    } else {
                                        const updateResponses = (response) => {
                                            props.setResponses(responses => [
                                                response.data, ...responses
                                            ])

                                            inputElement.current.innerText = '';

                                            setHasValue(false);
                                        }

                                        if (!props.repStatus.current) {
                                            axios.post(`/responses/${props.id}/comment`,
                                            {
                                                'comment': inputElement.current.innerText
                                            }).then(updateResponses)
                                        } else {
                                            axios.post(`/responses/${props.id}/response`,
                                            {
                                                'comment': inputElement.current.innerText
                                            }).then(updateResponses)
                                        } 
                                    }

                                    // setTimeout(() => {
                                    // }, 200)
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

    // const avatar = useSelector(state => state.user.image);

    return (
        <div className="Comment my-4 d-flex">
            <div className="CommentContent ms-3 w-100">
                <CommentInput 
                    responseMode={props.responseMode} 
                    setResponses={props.setResponses}
                    repStatus={props.repStatus}
                    id={props.id}
                />
            </div>
        </div>
    );
}

WriteComment = memo(WriteComment);

function Comments(props) {

    const [ comments, setComments ] = useState([]);
    const [ loaded, setLoaded ] = useState(false);
    // const [ countComments, setCountComments ] = useState(0);
    const user = useSelector(state => state.user.name);
    const scrollEnter = useRef(false);
    const offset = useRef(1);
    const limit = useRef(4);

    useEffect(() => {
        
        axios.get(`/products/${props.productId}/comments`)
            .then(response => {
                setComments(comments => [...response.data, ...comments]);
                setLoaded(true);
            });

    }, [])

    useEffect(() => {   

        window.onscroll = () => {
            if (document.body.offsetHeight - window.scrollY <= window.innerHeight + 200)
            {
                if (!scrollEnter.current) {
                    scrollEnter.current = true;
                    axios.get(
                        `/products/${props.productId}/other-comments?` +
                        `offset=${offset.current}&limit=${limit.current}`
                    )
                        .then(response => {
                            setComments(comments => [...comments, ...response.data]);
                        });

                    offset.current += limit.current;
                }
            } else {
                scrollEnter.current = false;
            }
        }

        // window.onscroll = scroll;
        
        return () => {
            window.onscroll = null;
        }

    }, [])

    return (
        <ProductIdContext.Provider value={props.productId}>
            <CommentsContext.Provider value={setComments}>
                <Header>
                    <Text weight={900} size={22}>
                        { props.comments } Bình luận
                    </Text>
                </Header>
                {loaded ?
                    <Body>
                        {user ?
                            <WriteComment name='You' responseMode={false} /> : 
                            <i>Đăng nhập để bình luận</i>
                        }
                        {
                            comments.map((comment, index) => 
                                <Comment 
                                    key={ comment.id }
                                    id={ comment.id }
                                    countResponse={ comment.countResponse }
                                    name={ comment.user.name }
                                    avatar={ comment.user.image }
                                    comment={ comment.comment }
                                    rate={ comment.rate }
                                    like={ comment.like }
                                    dislike={ comment.dislike }
                                    econ={ comment.econ }
                                />) 
                        }
                    </Body> :
                    <div className="text-center mt-4">
                        <div className="spinner-border" role="status">
                        </div>
                    </div>
                }
            </CommentsContext.Provider>
        </ProductIdContext.Provider>
    );
}

export default Comments;