import Text from '../../Share/Text';


function Link(props) {

    return (
        <a href={ props.href ?? '' }>
            <Text 
                color={'#fff'}
                display="block"
                mb={12}
            >
                { props.children }
            </Text>
        </a>
    )
}

export default Link;