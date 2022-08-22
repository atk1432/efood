function Header(props) {

    return (
        <div 
            className="col col-12 mt-5"
            style={props.style}
        >
            { props.children }
        </div>
    );
}


function Body(props) {

    return (
        <div
            ref={props._ref}
            className={"col col-12 mt-2 " + (props.className ?? '') }
            style={props.style}
        >
            { props.children }
        </div>
    );
}

export {
    Header, Body
}