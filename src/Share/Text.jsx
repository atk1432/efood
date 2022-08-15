function Text(props) {

    return (
        <span
            className={ props.className }
            style={{
                fontSize: props.size,
                fontWeight: props.weight,
                display: props.display,
                marginTop: props.mt,
                marginBottom: props.mb,
                opacity: props.opacity,
                color: props.color,
                overflow: props.overflow
            }}
            onClick={props.onClick}
        >
            { props.children }
        </span>
    );
}

export default Text;