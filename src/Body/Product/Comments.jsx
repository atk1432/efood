import { useState, useEffect, useRef } from 'react';
import { Header, Body } from '../../Share/Container';
import Image from '../../Share/Image';
import Text from '../../Share/Text';
import StarsReview from './StarsReview';
import styles from '../../Asset/Css/Comment.module.css';


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
                width={45}
                height={45}
                src="https://cdn0.iconfinder.com/data/icons/profession-and-occupation-icons/110/avatar_occupation_profile_cook_kitchener_flunkey_food-512.png" 
            />
            <div className="CommentContent ms-3">
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
                    />
                ) : <></>
            }
        </div>
    );
}


function Comment(props) {

    return (
        <CommentHeader name={props.name}>
            <div className="CommentContent__Review">
                <Text size={14} opacity={0.6}>
                    <StarsReview rate={4.5} />
                    <span className="ms-2">4.5</span>
                </Text>
            </div>
            <div className="CommentContent__Info">
                <div>{ props.comment }</div>
            </div>
            <div className="CommentContent__Interaction mt-3 d-flex flex-wrap"> 
                <ButtonInteractions />
                <span className="cursor-pointer">
                    Phản hồi
                </span>
            </div>
            {props.response.length !== 0 ?  
                <CommentResponse 
                    amount={props.response.length} 
                    response={props.response}
                /> : <></>
            }
        </CommentHeader>
    );
}


function CommentInput(props) {

    const [ focus, setFocus ] = useState(false);
    const [ value, setValue ] = useState();
    const [ hasValue, setHasValue ] = useState(false);

    const doNotFocus = () => {
        window.removeEventListener('click', doNotFocus);
        setFocus(false);
    }

    const inputElement = useRef();

    return (
        <>
            <div 
                className={styles.CommentInput}
                style={focus ? {
                    opacity: 1
                } : {}}
                onClick={(e) => {
                    e.stopPropagation();
                    if (!focus) {
                        setFocus(true);
                        window.addEventListener('click', doNotFocus)
                    }
                }}
            >
                <div 
                    ref={inputElement}
                    style={{
                        outline: 0,
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
                        onClick={() => setValue(inputElement.current.innerText)}
                    >
                        Đồng ý
                     </Text>
                </div> : <></>
            }
        </>
    );
}


function WriteComment(props) {

    return (
        <div className="Comment my-4 d-flex">
            <Image
                width={45}
                height={45}
                src="https://cdn0.iconfinder.com/data/icons/profession-and-occupation-icons/110/avatar_occupation_profile_cook_kitchener_flunkey_food-512.png" 
            />
            <div className="CommentContent ms-3 w-75">
                <CommentInput />
            </div>
        </div>
    );
}


function Comments() {

    const [ comments, setComments ] = useState([
        {
            name: 'User',
            comment: 'This is a comment!',
            response: [
                {
                    name: 'Response',
                    comment: 'This is a comment!',
                    response: []
                },
                {
                    name: 'Cứt',
                    comment: 'This is a comment!',
                    response: []
                }
            ]
        },
        {
            name: 'Yasuo',
            comment: 'This is a comment!',
            response: []
        }
    ]);

    const [ loaded, setLoaded ] = useState(true);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoaded(true);
    //     }, 3000)
    // }, [])

    return (
        <>
            <Header>
                <Text weight={900} size={22}>Bình luận</Text>
            </Header>
            {loaded ?
                <Body>
                    <WriteComment name='You' />
                    {comments.map((comment, index) => 
                        <Comment 
                            key={ index }
                            name={ comment.name }
                            comment={ comment.comment }
                            response={ comment.response }
                        />
                    )}
                </Body> :
                <div className="text-center mt-4">
                    <div className="spinner-border" role="status">
                    </div>
                </div>
            }
        </>
    );
}

export default Comments;