import Text from '../../Share/Text';


function LinkFooter(props) {

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

export default LinkFooter;