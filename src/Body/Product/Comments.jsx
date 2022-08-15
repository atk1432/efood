import { useState } from 'react';
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

function CommentResponse() {

    return (
        <div className="CommentContent__Response mt-3 cursor-pointer">
            <Text weight={900}>
                <i className="fa-solid fa-angle-down me-2"></i>
                8 phản hồi
            </Text>
        </div>
    );
}


function Comment() {

    return (
        <div className="Comment d-flex">
            <Image
                width={45}
                height={45}
                src="https://cdn0.iconfinder.com/data/icons/profession-and-occupation-icons/110/avatar_occupation_profile_cook_kitchener_flunkey_food-512.png" 
            />
            <div className="CommentContent ms-3">
                <div className="CommentContent__User">
                    <Text weight={900} className="me-2">User</Text>
                    <Text size={14} opacity={0.6} className="me-2">3 tháng trước</Text>
                </div>
                <div className="CommentContent__Review">
                    <Text size={14} opacity={0.6}>
                        <StarsReview rate={4.5} />
                        <span className="ms-2">4.5</span>
                    </Text>
                </div>
                <div className="CommentContent__Info">
                    <div>This is a comment</div>
                    <div>This is a comment</div>
                    <div>This is a comment</div>
                    <div>This is a comment</div>
                </div>
                <div className="CommentContent__Interaction mt-3 d-flex"> 
                    <ButtonInteractions />
                    <span className="cursor-pointer">
                        Phản hồi
                    </span>
                </div>
                <div className="CommentContent__Response mt-3 cursor-pointer">
                    <Text weight={900}>
                        <i className="fa-solid fa-angle-down me-2"></i>
                        8 phản hồi
                    </Text>
                </div>
            </div>
        </div>
    );
}


function Comments() {

    return (
        <>
            <Header>
                <Text weight={900} size={22}>Bình luận</Text>
            </Header>
            <Body className="mt-4">
                <Comment />
            </Body>
        </>
    );
}

export default Comments;