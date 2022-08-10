function MetaInfo(props) {

    return (
        <span 
            className="position-absolute bg-dark text-light h-auto fw-bold"
            style={{
                left: props.left,
                top: props.top,
                right: props.right,
                bottom: props.bottom,
                zIndex: 3,
                lineHeight: '30px',
                padding: '2px 8px',
                borderRadius: 10,
                fontSize: 14,
                ...props.style
            }}
        >
            { props.children }            
        </span>
    );
}

export default MetaInfo;