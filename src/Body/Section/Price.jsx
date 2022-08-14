import Text from '../../Share/Text.jsx';


function Price(props) {

    return (
        <Text
            size={ props.size ?? 22 }
            color={'#ff9e0d'}
            weight={900}
            display='block'
        >
            { props.children }
        </Text>
    )
}

export default Price;