import { Header, Body } from '../../Share/Container';
import Image from '../../Share/Image';
import Text from '../../Share/Text';


function Comment() {

    return (
        <div className="Comment">
            <Image
                width={60}
                height={60}
                src="https://cdn0.iconfinder.com/data/icons/profession-and-occupation-icons/110/avatar_occupation_profile_cook_kitchener_flunkey_food-512.png" 
            />
            <div className="Comment__UserInfo">
                <Text weight={900}>User</Text>
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
            <Body>
                <Comment />
            </Body>
        </>
    );
}

export default Comments;