function Text(props) {

    return (
        <span
            className={ props.className }
            style={{
                fontSize: props.size,
                fontWeight: props.weight,
                display: props.display,
                marginTop: props.mt,
                marginBottom: props.mb
            }}
        >
            { props.children }
        </span>
    );
}

export default Text;